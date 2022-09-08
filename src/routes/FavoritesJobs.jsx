import { Container, Alert } from "react-bootstrap";
import Job from "../components/Job";
import { useSelector } from 'react-redux'

const FavoritesJobs = () => {
    const jobContent = useSelector((state) => state.jobs.content)
    console.log('FavoritesJobs', jobContent)

    return (
        <>

            {jobContent.length !== 0 ? (
                <Container className="mt-5">
                    {
                        jobContent.map((job) => (
                            <Job key={job._id} data={job} />
                        ))
                    }
                </Container>
            ) : (<Alert className="text-center b-alert" variant={'danger'}>
                Nothing to show!
            </Alert>)
            }
        </>


    )
}

export default FavoritesJobs;