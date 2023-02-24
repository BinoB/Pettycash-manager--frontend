import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../../redux/features/product/productSlice";
import LineChart from "./LineChart";
import BarChart from "./BarChart";

function Chart() {
  const dispatch = useDispatch();
  const [chartData, setChartData] = useState();

  useEffect(() => {
    async function fetchData() {
      const products = await dispatch(getProducts({}));

      setChartData({
        labels: products.payload.map((data) => {
          var dateObj = new Date(data.createdAt);
          let month = dateObj.getUTCMonth() + 1;
          let day = dateObj.getUTCDate();
          let year = dateObj.getUTCFullYear();

          return year + "/" + month + "/" + day;
        }),

        datasets: [
          {
            label: "Expense",
            data: products.payload.map((data) => data.price * data.quantity),
            backgroundColor: [
              "rgba(21, 177, 189, 0.8)",
              "#0bb864",
              "#eb285c",
              "#8645b5",
              "#eda539",
              "#6e6a69"
            ],
            borderColor: "rgba(255, 186, 25, 0.9)",
            borderWidth: 2,
            tension: 0.5
          },
        ],
      });
    }
    fetchData();
  }, [dispatch]);

  return (
    <div>
      <div>
        {chartData && <LineChart chartData={chartData} />}
      </div>
      <div>
        {chartData && <BarChart chartData={chartData} />}
      </div>
    </div>
  );
}

export default Chart;
