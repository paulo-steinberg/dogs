export const Loading = ({ isLoading }) => {
  if (!isLoading) return null;
  return <h1>Loading Component</h1>;
};
