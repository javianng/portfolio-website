import Image from "next/image";

interface FeatureTableProps {
  data: {
    name: string;
    description: string;
    type: string;
    min: string;
    max: string;
    mean: string;
    median: string;
    std: string;
    missing: string;
  }[];
}

interface PerformanceTableProps {
  data: {
    model: string;
    r2: string;
    mae: string;
    rmse: string;
    mape: string;
  }[];
}

const FeatureTable = ({ data }: FeatureTableProps) => (
  <div className="w-[50vw] overflow-auto py-3">
    <table className="min-w-full table-auto border-collapse">
      <thead>
        <tr className="border-2 bg-neutral-100 dark:bg-neutral-800">
          <th className="p-2 text-left">Feature Name</th>
          <th className="p-2 text-left">Description</th>
          <th className="p-2 text-left">Value Type/Unit</th>
          <th className="p-2 text-left">Min</th>
          <th className="p-2 text-left">Max</th>
          <th className="p-2 text-left">Mean</th>
          <th className="p-2 text-left">Median</th>
          <th className="p-2 text-left">Std</th>
          <th className="p-2 text-left">Missing Data</th>
        </tr>
      </thead>
      <tbody>
        {data.map((feature, index) => (
          <tr
            key={feature.name}
            className={`border-2 ${
              index % 2 === 0
                ? "bg-white dark:bg-neutral-900"
                : "bg-neutral-50 dark:bg-neutral-800"
            }`}
          >
            <td className="p-2">{feature.name}</td>
            <td className="p-2">{feature.description}</td>
            <td className="p-2">{feature.type}</td>
            <td className="p-2">{feature.min}</td>
            <td className="p-2">{feature.max}</td>
            <td className="p-2">{feature.mean}</td>
            <td className="p-2">{feature.median}</td>
            <td className="p-2">{feature.std}</td>
            <td className="p-2">{feature.missing}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const PerformanceTable = ({ data }: PerformanceTableProps) => (
  <div className="w-[50vw] overflow-auto py-3">
    <table className="min-w-full table-auto border-collapse">
      <thead>
        <tr className="border-2 bg-neutral-100 dark:bg-neutral-800">
          <th className="p-2 text-left">Model</th>
          <th className="p-2 text-left">R²</th>
          <th className="p-2 text-left">MAE</th>
          <th className="p-2 text-left">RMSE</th>
          <th className="p-2 text-left">MAPE</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr
            key={row.model}
            className={`border-2 ${
              index % 2 === 0
                ? "bg-white dark:bg-neutral-900"
                : "bg-neutral-50 dark:bg-neutral-800"
            }`}
          >
            <td className="p-2">{row.model}</td>
            <td className="p-2">{row.r2}</td>
            <td className="p-2">{row.mae}</td>
            <td className="p-2">{row.rmse}</td>
            <td className="p-2">{row.mape}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const ModelComparisonImages = () => (
  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
    {[
      {
        name: "CatBoost",
        path: "/projects/housing-pricing-prediction/CatBoost.jpg",
      },
      {
        name: "Random Forest",
        path: "/projects/housing-pricing-prediction/RandomForest.jpg",
      },
      {
        name: "XGBoost",
        path: "/projects/housing-pricing-prediction/XGBoost.jpg",
      },
    ].map((model) => (
      <figure key={model.name} className="flex flex-col items-center">
        <figcaption className="mb-2 text-center font-medium underline">
          {model.name}
        </figcaption>
        <Image
          src={model.path}
          alt={`${model.name} model prediction comparison`}
          width={800}
          height={800}
          className="rounded-md shadow-md"
        />
      </figure>
    ))}
  </div>
);

export default function HousingPricePredictionProject() {
  return (
    <article className="prose prose-neutral dark:prose-invert max-w-none">
      <section>
        <h2 className="h2">Introduction</h2>
        <p className="p">
          As Singapore continues to experience high demand in the housing
          market, accurately predicting future prices of Housing Development
          Board (HDB) resale flats becomes crucial for effective financial
          planning. Our project focused on developing a robust time series
          forecasting model to predict HDB housing prices, integrating
          historical transaction data with geographical features.
        </p>
      </section>

      <section>
        <h2 className="h2">Objectives</h2>
        <ol className="ol">
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
      </section>

      <section>
        <h2 className="h2">Methodology</h2>
        <div className="space-y-4">
          <section>
            <h3 className="h3">Datasets Used</h3>
            <ol className="ol">
              <li>HDB resale transaction data</li>
              <li>SORA rates</li>
              <li>
                Geographical data on Points of Interest like MRT stations,
                malls, and schools
              </li>
              <li>
                Data from blogs and government sources on new BTO launches
              </li>
            </ol>
          </section>

          <section>
            <h3 className="h3">Models Deployed</h3>
            <ul className="ul">
              <li>Tree ensemble models (Random Forest, XGBoost, CatBoost)</li>
              <li>Deep learning models (LSTM, GNNWR)</li>
            </ul>
          </section>

          <section>
            <h3 className="h3">ML Model Training Features</h3>
            <FeatureTable data={features} />
          </section>

          <section>
            <h3 className="h3">Neural Network Training Features</h3>
            <FeatureTable data={neuralNetworkFeatures} />
          </section>
        </div>
      </section>

      <section>
        <h2 className="h2">Results and Analysis</h2>
        <div className="space-y-6">
          <p className="p">
            We developed a diverse modeling approach combining both traditional
            ensemble methods and advanced deep learning techniques. The models
            achieved high accuracy in forecasting, demonstrated by strong
            performance metrics on the unseen data for 2024.
          </p>

          <section>
            <h3 className="h3">Model Performance on 2024 Dataset</h3>
            <PerformanceTable data={performaceData} />
          </section>

          <section>
            <h3 className="h3">Prediction Visualization</h3>
            <ModelComparisonImages />
          </section>
        </div>
      </section>

      <section>
        <h2 className="h2">Impact</h2>
        <p className="p">
          The project provides a practical tool for potential buyers and
          investors to estimate future prices while contributing to the academic
          field by demonstrating the effectiveness of integrating diverse data
          sources and advanced modeling techniques in real-world applications.
        </p>
      </section>

      <section>
        <h2 className="h2">Technologies Used</h2>
        <ul className="ul">
          <li>Python for data handling and modeling</li>
          <li>
            Advanced machine learning libraries (scikit-learn, XGBoost,
            CatBoost, TensorFlow)
          </li>
          <li>Data visualization tools for analyzing model performance</li>
        </ul>
      </section>
    </article>
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
