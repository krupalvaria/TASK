const api = (req, res) => {
  const inputData = req.body;

  const lableOfMonths = inputData.map((item) => {
    const date = new Date(item.date);
    return date.toLocaleString("en-us", { month: "long" });
  });

  const datasets = [];

  inputData.forEach((item) => {
    const months = new Date(item.date).toLocaleString("en-us", {
      month: "long",
    });

    const index = lableOfMonths.indexOf(months);

    const monthReach = Array(lableOfMonths.length).fill(0);
    monthReach[index] = item.reach;
    datasets.push({
      label: item.campaignMatch.supplier.name,
      monthReach: monthReach,
      supplier_id: item.campaignMatch.id_supplier,
      id: item.campaignMatch.id,
    });
  });

  const outputData = {
    lableOfMonths: [...new Set(lableOfMonths)],
    datasets: datasets,
  };

  res.json(outputData);
};
module.exports = {
  api,
};
