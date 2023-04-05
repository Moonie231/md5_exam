import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addTour} from "../service/tourService";
import {Field, Form, Formik} from "formik";

export default function Add() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleAdd = (values) => {
        let data = {...values}
        dispatch(addTour(data))
        navigate('/')
    }

    return(
        <>
            <h1>Thêm tour</h1>
            <Formik
                initialValues={{
                    title: "",
                    price: "",
                    description: ""
                }}

                onSubmit={(values) => {
                    handleAdd(values);
                }}
            >
                <Form>
                    <div class="row g-3">
                        <div class="col-md-6">
                            <div class="form-floating">
                                <Field type="text" class="form-control" name={'title'} id="title"/>
                                <label for="title">Tên Tour</label>
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
                            <button class="btn btn-primary w-100 py-3" type="submit">Thêm mới</button>
                            <Link to={"/"}><button class="btn btn-info w-100 py-3" type="button">Huy</button></Link>
                        </div>
                    </div>
                </Form>
            </Formik>
        </>
    )
}