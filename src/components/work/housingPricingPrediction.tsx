export default function HousingPricingPrediction() {
  return (
    <div className="flex flex-col gap-4">
      <p>
        HDB Price Forecasting Using Transactional Data and Geographical
        Information
      </p>
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
      <ul className="list-outside list-decimal pl-5">
        <li>
          To create accurate forecasting models for HDB resale prices that
          assist potential buyers and investors in making informed decisions.
        </li>
        <li>
          To leverage multi-source data, including transaction records,
          geographical points of interest, and economic indicators like the
          Singapore Overnight Rate Average (SORA).
        </li>
      </ul>
      <h2 className="pb-1 text-xl font-bold sm:text-3xl">Methodology</h2>
      <h3>Datasets Used:</h3>
      <ul className="list-outside list-decimal pl-5">
        <li>HDB resale transaction data</li>
        <li>SORA rates</li>
        <li>
          Geographical data on Points of Interest like MRT stations, malls, and
          schools
        </li>
        <li>Data from blogs and government sources on new BTO launches</li>
      </ul>
      <h3>Models Deployed:</h3>
      <ul className="list-outside list-decimal pl-5">
        <li>Tree ensemble models (Random Forest, XGBoost, CatBoost)</li>
        <li>Deep learning models (LSTM, GNNWR)</li>
      </ul>
      <h2 className="pb-1 text-xl font-bold sm:text-3xl">Achievements</h2>
      <p>
        Developed a diverse modeling approach that combined both traditional
        ensemble methods and advanced deep learning techniques to handle the
        complex nature of the datasets. Successfully integrated
        multi-dimensional data from various sources, enhancing the model’s input
        features and predictive accuracy. Our models achieved high accuracy in
        forecasting, demonstrated by strong performance metrics like R2, RMSE,
        MAE, and MAPE, particularly on the unseen data for 2024.
      </p>
      <h2 className="pb-1 text-xl font-bold sm:text-3xl">Impact</h2>
      <p>
        The project not only provides a practical tool for potential buyers and
        investors to estimate future prices but also contributes to the academic
        field by demonstrating the effectiveness of integrating diverse data
        sources and advanced modeling techniques in real-world applications.
      </p>
      <h2 className="pb-1 text-xl font-bold sm:text-3xl">Technologies</h2>
      <p>
        Python for data handling and modeling Advanced machine learning
        libraries such as scikit-learn, XGBoost, CatBoost, and TensorFlow Data
        visualization tools for analyzing model performance and results
      </p>
    </div>
  );
}
