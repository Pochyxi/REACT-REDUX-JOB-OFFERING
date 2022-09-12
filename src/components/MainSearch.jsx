import { Container, Row, Col, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { getJobs, GET_JOBS, UPDATE_QUERY } from '../redux/actions';
import Job from './Job';



const MainSearch = () => {
  const jobs = useSelector(state => state.search.content)

  const dispatch = useDispatch()
  const queryRedux = useSelector(state => state.search.query)

  const handleChange = (e) => {
    dispatch({
      type: UPDATE_QUERY,
      payload: e.target.value
    })
  }

  return (

    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-5 text-center">
          <h1>Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form>
            <Form.Control
              type="search"
              value={queryRedux}
              onChange={handleChange}
              onKeyUp={() => {
                if (queryRedux.length === 0) {
                  dispatch({
                    type: GET_JOBS,
                    payload: []
                  })
                } else {
                  dispatch(getJobs())
                }
              }}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>


  )
}

export default MainSearch
