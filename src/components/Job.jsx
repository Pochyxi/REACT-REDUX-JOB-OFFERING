import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AiFillHeart } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux'
import { addJobs, removeJobs } from '../redux/actions';


const Job = ({ data }) => {

  const jobContent = useSelector((state) => state.jobs.content)
  const dispatch = useDispatch()


  console.log(jobContent)
  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: '1px solid #00000033', borderRadius: 4 }}
    >
      <Col xs={2} className={jobContent.some(job => job._id === data._id) ? 'text-danger' : 'text-dark'}>
        <AiFillHeart onClick={() => {
          console.log('sono jobContent')
          console.log(jobContent.some(job => job._id === data._id))

          if (jobContent.some((job) => job._id === data._id)) {
            dispatch(removeJobs(data._id))
          } else {

            dispatch(addJobs(data))
          }

        }} />
      </Col >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={7}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  )

}



export default Job
