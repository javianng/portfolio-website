import Image from "next/image";

export default function HousingPricingPrediction() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="pb-1 text-xl font-bold sm:text-3xl">Introduction</h2>
      <p>
        As Singapore continues to experience high demand in the housing market,
        accurately predicting future prices of Housing Development Board (HDB)
        resale flats becomes crucial for effective financial planning. Our
        project focused on developing a robust time series forecasting model to
        predict HDB housing prices, integrating historical transaction data with
        geographical features.
      </p>
      <h2 className="pb-1 text-xl font-bold sm:text-3xl">Objectives</h2>
      <ol className="list-outside list-decimal pl-5">
        <li>
          To create accurate forecasting models for HDB resale prices that
          assist potential buyers and investors in making informed decisions.
        </li>
        <li>
          To leverage multi-source data, including transaction records,
          geographical points of interest, and economic indicators like the
          Singapore Overnight Rate Average (SORA).
        </li>
      </ol>
      <h2 className="pb-1 text-xl font-bold sm:text-3xl">Methodology</h2>
      <h3 className="underline">Datasets Used:</h3>
      <ol className="list-outside list-decimal pl-5">
        <li>HDB resale transaction data</li>
        <li>SORA rates</li>
        <li>
          Geographical data on Points of Interest like MRT stations, malls, and
          schools
        </li>
        <li>Data from blogs and government sources on new BTO launches</li>
      </ol>
      <h3 className="underline">Models Deployed:</h3>
      <ul className="list-outside list-decimal pl-5">
        <li>Tree ensemble models (Random Forest, XGBoost, CatBoost)</li>
        <li>Deep learning models (LSTM, GNNWR)</li>
      </ul>
      <h3 className="underline">
        Additional Features Used for ML model training:
      </h3>
      <div className="flex overflow-scroll">
        <table>
          <thead>
            <tr className="border-2">
              <th className="text-nowrap px-4 py-4">Feature Name</th>
              <th className="text-nowrap px-4 py-4">
                Feature Brief Description
              </th>
              <th className="text-nowrap px-4 py-4">Value Type/Unit</th>
              <th className="text-nowrap px-4 py-4">Min</th>
              <th className="text-nowrap px-4 py-4">Max</th>
              <th className="text-nowrap px-4 py-4">Mean</th>
              <th className="text-nowrap px-4 py-4">Median</th>
              <th className="text-nowrap px-4 py-4">Std</th>
              <th className="text-nowrap px-4 py-4">No. Missing data points</th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr className="border-2" key={index}>
                <td className="text-wrap px-4 text-center">{feature.name}</td>
                <td className="text-wrap px-4">{feature.description}</td>
                <td className="text-wrap px-4 text-center">{feature.type}</td>
                <td className="text-wrap px-4 text-center">{feature.min}</td>
                <td className="text-wrap px-4 text-center">{feature.max}</td>
                <td className="text-wrap px-4 text-center">{feature.mean}</td>
                <td className="text-wrap px-4 text-center">{feature.median}</td>
                <td className="text-wrap px-4 text-center">{feature.std}</td>
                <td className="text-wrap px-4 text-center">
                  {feature.missing}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h3 className="underline">
        Features Used for Neural network model training:
      </h3>
      <div className="flex overflow-scroll">
        <table>
          <thead>
            <tr className="border-2">
              <th className="text-nowrap px-4 py-4">Feature Name</th>
              <th className="text-nowrap px-4 py-4">
                Feature Brief Description
              </th>
              <th className="text-nowrap px-4 py-4">Value Type/Unit</th>
              <th className="text-nowrap px-4 py-4">Min</th>
              <th className="text-nowrap px-4 py-4">Max</th>
              <th className="text-nowrap px-4 py-4">Mean</th>
              <th className="text-nowrap px-4 py-4">Median</th>
              <th className="text-nowrap px-4 py-4">Std</th>
              <th className="text-nowrap px-4 py-4">No. Missing data points</th>
            </tr>
          </thead>
          <tbody>
            {neuralNetworkFeatures.map((feature, index) => (
              <tr className="border-2" key={index}>
                <td className="text-wrap px-4 text-center">{feature.name}</td>
                <td className="text-wrap px-4">{feature.description}</td>
                <td className="text-wrap px-4 text-center">{feature.type}</td>
                <td className="text-wrap px-4 text-center">{feature.min}</td>
                <td className="text-wrap px-4 text-center">{feature.max}</td>
                <td className="text-wrap px-4 text-center">{feature.mean}</td>
                <td className="text-wrap px-4 text-center">{feature.median}</td>
                <td className="text-wrap px-4 text-center">{feature.std}</td>
                <td className="text-wrap px-4 text-center">
                  {feature.missing}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h2 className="pb-1 text-xl font-bold sm:text-3xl">Achievements</h2>
      <p>
        Developed a diverse modeling approach that combined both traditional
        ensemble methods and advanced deep learning techniques to handle the
        complex nature of the datasets. Successfully integrated
        multi-dimensional data from various sources, enhancing the model&apos;s
        input features and predictive accuracy. Our models achieved high
        accuracy in forecasting, demonstrated by strong performance metrics like
        R2, RMSE, MAE, and MAPE, particularly on the unseen data for 2024.
      </p>
      <h3 className="underline">
        Ensemble Models Performance on Unseen 2024 Dataset
      </h3>
      <div className="flex overflow-scroll">
        <table>
          <thead>
            <tr className="border-2">
              <th className="text-nowrap px-4 py-4">Model</th>
              <th className="text-nowrap px-4 py-4">R²</th>
              <th className="text-nowrap px-4 py-4">MAE</th>
              <th className="text-nowrap px-4 py-4">RMSE</th>
              <th className="text-nowrap px-4 py-4">MAPE</th>
            </tr>
          </thead>
          <tbody>
            {performaceData.map((row, index) => (
              <tr className="border-2" key={index}>
                <td className="text-wrap px-4 text-center">{row.model}</td>
                <td className="text-wrap px-4 text-center">{row.r2}</td>
                <td className="text-wrap px-4 text-center">{row.mae}</td>
                <td className="text-wrap px-4 text-center">{row.rmse}</td>
                <td className="text-wrap px-4 text-center">{row.mape}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h3 className="underline">
        Predicted Values against True Values on 2024 Dataset
      </h3>
      <div className="grid grid-cols-3 gap-3">
        <div>
          <h4 className="pb-2 text-center underline">CatBoost</h4>
          <Image
            src={"/projectDocuments/housingPricingPrediction/CatBoost.jpg"}
            alt={""}
            width={800}
            height={800}
          />
        </div>
        <div>
          <h4 className="pb-2 text-center underline">Random Forest</h4>
          <Image
            src={"/projectDocuments/housingPricingPrediction/RandomForest.jpg"}
            alt={""}
            width={800}
            height={800}
          />
        </div>
        <div>
          <h4 className="pb-2 text-center underline">XGBoost</h4>
          <Image
            src={"/projectDocuments/housingPricingPrediction/XGBoost.jpg"}
            alt={""}
            width={800}
            height={800}
          />
        </div>
      </div>
      <h2 className="pb-1 text-xl font-bold sm:text-3xl">Impact</h2>
      <p>
        The project not only provides a practical tool for potential buyers and
        investors to estimate future prices but also contributes to the academic
        field by demonstrating the effectiveness of integrating diverse data
        sources and advanced modeling techniques in real-world applications.
      </p>
      <h2 className="pb-1 text-xl font-bold sm:text-3xl">Technologies</h2>
      <p>
        Python for data handling and modeling advanced machine learning
        libraries such as scikit-learn, XGBoost, CatBoost, and TensorFlow Data
        visualization tools for analyzing model performance and results
      </p>
    </div>
  );
}

const features = [
  {
    name: "town",
    description: "Town of the particular resale unit",
    type: "String",
    min: "-",
    max: "-",
    mean: "-",
    median: "-",
    std: "-",
    missing: "0",
  },
  {
    name: "flat_type",
    description: "Flat type for particular resale unit",
    type: "String",
    min: "-",
    max: "-",
    mean: "-",
    median: "-",
    std: "-",
    missing: "0",
  },
  {
    name: "storey_range",
    description: "Floor range that resale unit falls within",
    type: "String",
    min: "-",
    max: "-",
    mean: "-",
    median: "-",
    std: "-",
    missing: "0",
  },
  {
    name: "floor_area_sqm",
    description: "Floor area is square meters of resale unit",
    type: "Float/sqm",
    min: "31.0",
    max: "280.0",
    mean: "97.198",
    median: "94.0",
    std: "24.052",
    missing: "0",
  },
  {
    name: "flat_model",
    description: "Flat model for particular resale unit",
    type: "String",
    min: "-",
    max: "-",
    mean: "-",
    median: "-",
    std: "-",
    missing: "0",
  },
  {
    name: "remaining_lease",
    description: "Years remaining till the end of lease for resale unit",
    type: "Float/years",
    min: "41.75",
    max: "97.75",
    mean: "74.503",
    median: "74.25",
    std: "13.373",
    missing: "0",
  },
  {
    name: "resale_price",
    description: "Resale price of resale unit",
    type: "Float/SGD",
    min: "100000.0",
    max: "1568888.0",
    mean: "483849.929",
    median: "450000.0",
    std: "166746.819",
    missing: "0",
  },
  {
    name: "sora",
    description:
      "Singapore Overnight Rate Average (SORA), linked to mortgage rate on the date of record on flat transaction",
    type: "Float/% loan rate",
    min: "0.084",
    max: "3.753",
    mean: "1.088",
    median: "0.562",
    std: "1.195",
    missing: "0",
  },
  {
    name: "bto_supply_within_4km",
    description: "Count of BTO units within a 4km radius of the resale unit",
    type: "Integer/BTO",
    min: "636",
    max: "97324",
    mean: "27458.703",
    median: "19367.0",
    std: "25044.420",
    missing: "0",
  },
  {
    name: "distance2cbd",
    description:
      "Euclidean distance of the resale unit from the Singapore Central Business District",
    type: "Float/Kilometers",
    min: "0.721",
    max: "19.757",
    mean: "12.051",
    median: "12.959",
    std: "4.356",
    missing: "0",
  },
  {
    name: "poi_mrt_prisch_mall",
    description:
      'Points of Interest (POI) comprising MRT Stations, Primary Schools, Malls concatenated with the format "POI Name, Euclidean distance (m)"',
    type: "String",
    min: "-",
    max: "-",
    mean: "-",
    median: "-",
    std: "-",
    missing: "0",
  },
  {
    name: "poi_vector",
    description:
      "Word embedded vector of poi_mrt_prisch_mall, represented as a matrix",
    type: "2D Matrix (1 x 300)",
    min: "-",
    max: "-",
    mean: "-",
    median: "-",
    std: "-",
    missing: "0",
  },
  {
    name: "poi_vector_average",
    description:
      "Average of vectors in matrix from Word vector embedded poi_mrt_prisch_mall, normalised",
    type: "Float",
    min: "-",
    max: "-",
    mean: "-",
    median: "-",
    std: "-",
    missing: "0",
  },
];

const neuralNetworkFeatures = [
  {
    name: "latitude",
    description: "Represents the latitude of the flat",
    type: "Float",
    min: "1.270",
    max: "1.457",
    mean: "1.367",
    median: "1.367",
    std: "0.0428",
    missing: "0",
  },
  {
    name: "longitude",
    description: "Represents the longitude of the flat",
    type: "Float",
    min: "103.685",
    max: "103.988",
    mean: "103.841",
    median: "103.846",
    std: "0.0714",
    missing: "0",
  },
];

const performaceData = [
  {
    model: "XGBoost",
    r2: "0.928311",
    mae: "0.069937",
    rmse: "0.083064",
    mape: "0.543109",
  },
  {
    model: "Random Forest",
    r2: "0.9484",
    mae: "0.04807",
    rmse: "0.06771",
    mape: "0.003622",
  },
  { model: "CatBoost", r2: "0.95", mae: "0.05", rmse: "2.7e-07", mape: "-" },
];
