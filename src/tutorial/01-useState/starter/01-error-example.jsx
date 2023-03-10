const ErrorExample = () => {
  let count = 0;

  const handleClick = () => {
    count += 1;
    console.log(count);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button type="button" onClick={handleClick} className="btn">
        Increase
      </button>
    </div>
  );
};

export default ErrorExample;
