import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {editTour, getTourById} from "../service/tourService";
import {useEffect} from "react";
import {Field, Form, Formik} from "formik";

export default function Edit() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {id} = useParams()
    const tour = useSelector((state) => {
        console.log(state.tours.tour)
        return state.tours.tour
    })
    const handleEdit = (values) => {
        let data = [{...values},id]
        dispatch(editTour(data))
        navigate('/')
    }
    useEffect(() => {
        dispatch(getTourById(id))
    }, [])

    return(
        <Formik
            initialValues={{
                id:tour.id,
                title: tour.title,
                price: tour.price,
                description: tour.description,

            }}
            onSubmit={(values) => {
                handleEdit(values);
            }}
            enableReinitialize={true}
        >
            <Form>
                <div class="row g-3">
                    <div class="col-md-6">
                        <div class="form-floating">
                            <Field type="text" class="form-control" name={'title'} id="title"/>
                            <label for="title">Tên</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating">
                            <Field type="text" class="form-control" name={'price'} id="price"/>
                            <label for="price">Giá</label>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="form-floating">
                            <Field as={'textarea'} class="form-control" name={'description'} id="description" placeholder="Description" style={{height: '150px'}}/>
                            <label for="description">Description</label>
                        </div>
                    </div>
                    <div class="col-12">
                        <button class="btn btn-primary w-100 py-3" type="submit">Update</button>
                    </div>
                </div>
            </Form>
        </Formik>
    )
}