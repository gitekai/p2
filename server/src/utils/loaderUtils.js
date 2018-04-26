import _ from 'lodash';

export default (modelName, searchedColumn, attributeName = null) => models =>
  async (ids) => {
    const searchResult = await models[modelName].findAll({
      raw: true,
      where: { [searchedColumn]: { [models.Sequelize.Op.in]: ids } },
    });
    const groupedResult = _.groupBy(searchResult, searchedColumn);
    const resultFormatted = (attributeName === null)
      ? ids.map(id => groupedResult[id] || [])
      : ids.map(id => groupedResult[id].map(obj => obj[attributeName]) || []);

    return resultFormatted;
  };
