import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {deleteTour, getTours} from "../service/tourService";

export default function List() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const tours = useSelector((state) => {
        return state.tours.tours
    })
    useEffect(() => {
        dispatch(getTours())
    }, [])

    return (
        <>
            <Link to={'/add-tour'}>
                <button type="button" className="btn btn-primary">Add</button>
            </Link>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Tên</th>
                    <th scope="col">Giá</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                </tr>
                </thead>
                <tbody>
                {tours !== undefined && tours.map((item, key) => (
                    <>
                        <tr>
                            <th scope="row">{key + 1}</th>
                            <td><Link to={`/tour/${item.id}`}>{item.title}</Link></td>
                            <td>{item.price}</td>
                            <td>
                                <button
                                    className="btn-danger"
                                    onClick={() => {
                                        dispatch(deleteTour(item.id)).then(() => {
                                            dispatch(getTours()).then(() => {
                                                navigate('/')
                                            })
                                        })

                                    }}
                                >
                                    Delete
                                </button>
                            </td>
                            <td>
                                <Link to={`edit-tour/${item.id}`}>
                                    <button
                                        className="btn-primary ">
                                        Edit
                                    </button>
                                </Link>
                            </td>
                        </tr>
                    </>
                ))}


                </tbody>
            </table>
        </>
    )
}