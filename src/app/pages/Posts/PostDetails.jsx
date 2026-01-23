import { useParams } from "react-router-dom";

const PostDetails = () => {
  let { id } = useParams();
  return <div>PostDetails: {id}</div>;
};

export default PostDetails;
