import { Op } from 'sequelize';

function modifyWhere(obj) {
  if (!obj.AND && !obj.OR) {
    Object.keys(obj).forEach((key) => {

      const [attr, operator] = key.split('_');

      const a = {};
      a[attr] = {};
      if (operator == 'like') {
        a[attr][Op.like] = obj[key];
      } else if (operator == 'equals') {
        a[attr][Op.eq] = obj[key];
      } else if (operator == 'in') {
        a[attr][Op.in] = obj[key];
      } else if (operator == 'not') {
        a[attr][Op.not] = obj[key];
      } else if (operator == 'notLike') {
        a[attr][Op.notLike] = obj[key];
      } else if (operator === 'regex') {
        a[attr][Op.iRegexp] = obj[key];
      } else if (operator === 'notRegexp') {
        a[attr][Op.notIRegexp] = obj[key];
      } else {
        a[attr][Op.eq] = obj[key];
      } 

      obj[attr] = {};
      Object.defineProperties(obj,
        {
          [attr]: Object.getOwnPropertyDescriptor(a, attr),
        } 
      );
      delete obj[key];
    });
    return obj;
  }

  if (obj.AND) {
    Object.defineProperties(obj,
      {
        [Op.and]: Object.getOwnPropertyDescriptor(obj, 'AND'),
      });
    delete obj.AND;
    obj[Op.and].forEach((item) => {
      modifyWhere(item);
    });
  }

  if (obj.OR) {
    Object.defineProperties(obj,
      {
        [Op.or]: Object.getOwnPropertyDescriptor(obj, 'OR'),
      });

    delete obj.OR;
    obj[Op.or].forEach((item) => {
      modifyWhere(item);
    });
  }
}

export const createMutation = model =>
  (obj, args, context) =>
    context.models[model].create(args.data);


export const updateMutation = model =>
  async (obj, args, context) => {
    const foundInstance = await context.models[model].findById(args.id);
    return foundInstance.update(args.data);
  };

export const deleteMutation = model =>
  async (obj, args, context) => {
    const foundInstance = await context.models[model].findById(args.id);
    return foundInstance.destroy();
  };

export const findById = model =>
  (obj, args, context) =>
    context.models[model].findById(args.id);


export const findAll = model =>
  (obj, args, context) => {
    const { where = {}, first = 10, skip = 0 } = args;
    modifyWhere(where);
    return context.models[model].findAll({
      limit: first,
      offset: skip,
      where,
    });
  };

