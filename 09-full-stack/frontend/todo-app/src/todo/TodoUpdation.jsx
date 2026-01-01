import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useAuth } from '../components/security/AuthProvider'
import {
    createTodoApi,
    retrieveTodoApi,
    updateTodoApi
} from '../components/api/TodoService'
import { Formik, Form, Field } from 'formik'
import moment from 'moment'

const TodoUpdation = () => {

    const { id } = useParams()
    const navigate = useNavigate()
    const authContext = useAuth()
    const username = authContext.username
    
    const [description, setDescription] = useState('')
    const [targetDate, setTargetDate] = useState('')

    useEffect(() => {
        if (username && Number(id) !== -1) {
            retrieveTodoApi(username, id)
                .then(response => {
                    setDescription(response.data.description)
                    setTargetDate(response.data.targetDate)
                })
                .catch(error => console.log(error))
        }
    }, [id, username])

    function onSubmit(values) {
        const todo = {
            id: Number(id),
            description: values.description,
            targetDate: moment(values.targetDate).format('YYYY-MM-DD'),
            done: false
        }

        if (Number(id) === -1) {
            createTodoApi(username, todo)
                .then(() => navigate('/todos'))
                .catch(error => console.log(error))
        } else {
            updateTodoApi(username, id, todo)
                .then(() => navigate('/todos'))
                .catch(error => console.log(error))
        }
    }

    function validate(values) {
        let errors = {}

        if (!values.description || values.description.length < 5) {
            errors.description = 'Enter at least 5 characters'
        }

        if (
            values.targetDate === null ||
            values.targetDate === '' ||
            !moment(values.targetDate).isValid()
        ) {
            errors.targetDate = 'Enter a valid target date'
        }

        return errors
    }

    return (
        <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl">
            <h1 className="text-2xl font-semibold text-gray-800 mb-6">
                Enter Todo Details
            </h1>

            <Formik
                initialValues={{ description, targetDate }}
                enableReinitialize={true}
                onSubmit={onSubmit}
                validate={validate}
                validateOnBlur={false}
                validateOnChange={false}
            >
                <Form className="space-y-5">

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Description
                        </label>
                        <Field
                            type="text"
                            name="description"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg
                                       focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Target Date
                        </label>
                        <Field
                            type="date"
                            name="targetDate"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg
                                       focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="rounded-full bg-blue-600 text-white px-6 py-2
                                       hover:bg-blue-700 hover:scale-105 transition
                                       shadow-md hover:shadow-lg"
                        >
                            Save
                        </button>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

export default TodoUpdation
