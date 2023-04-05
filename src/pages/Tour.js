import {Link, useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getTourById} from "../service/tourService";

export default function Tour () {
    const {id} = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const tour = useSelector((state) => {
        console.log(state)
        return state.tours.tour
    })
    useEffect(() => {
        dispatch((getTourById(id)))
    }, [])
    return(
        <>
            <h1>Chi tiết tour</h1>
            <p> Tour du lịch {tour.title}</p>
            <p> Giá: {tour.price}</p>
            <p>{tour.description}</p>
            <Link to={'/'}><button type="button" className="btn btn-primary">Danh sách</button></Link>
        </>
    )
}