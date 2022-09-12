import { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Job from './Job'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCompanyJobs, SET_COMPANY_NAME } from '../redux/actions'

const CompanySearchResults = () => {
  const jobs = useSelector(state => state.search.companyJobs)
  const params = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({
      type: SET_COMPANY_NAME,
      payload: params.companyName,
    })
    dispatch(getCompanyJobs())
  }, [])

  return (
    <Container className='mt-5'>
      <Row>
        <Col>
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default CompanySearchResults
