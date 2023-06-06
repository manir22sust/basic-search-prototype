export const SearchResults = ({ results }) => {
  return (
    <div className="articles">
      <div className="article-list">
        {results.map((result) => (
          <div key={result.bmNumber} className="article-item">
            <img
              src={result.imageUrls.url}
              alt={result.name}
              className="article-image"
            />
            <div className="article-desc">
              <h4 className="article-name">{result.name}</h4>
              <p className="article-price">{result.priceDisplay} € </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
