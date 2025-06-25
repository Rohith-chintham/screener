/**
 * Filters a list of stocks based on custom screener criteria.
 *
 * @param {Array} stocks - The list of stock documents.
 * @param {Object} filters - The filter object { pe, roe, de }.
 * @returns {Array} - Filtered stock list.
 */
export const applyScreenerFilters = (stocks, filters) => {
  return stocks.filter(stock => {
    const matchPE = !filters.pe || stock.pe < Number(filters.pe);
    const matchROE = !filters.roe || stock.roe > Number(filters.roe);
    const matchDE = !filters.de || stock.de_ratio < Number(filters.de);

    return matchPE && matchROE && matchDE;
  });
};
