import React from 'react'
import { connect } from 'react-redux'
import * as coursesActions from "../../redux/actions/courseActions"
import PropTypes from 'prop-types'

class CoursesPage extends React.Component {
    
    state = {
            course: {
                title: ''
            }
        }
    
    handleChange = (event) => {
        const course = {...this.state.course, title: event.target.value}
        this.state({course})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.dispatch(coursesActions.createCourse(this.state.course))
        
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Courses</h2>
                <h3>Add Course</h3>
                <input
                 type="text"
                 onChange={this.handleChange}
                 value={this.state.title}
                />
                <input type="submit" value="Save"/>
                {this.props.courses.map(course => {
                    <div key={course.title}>{course.title}</div>
                })}
            </form>
        )
    }
}

CoursesPage.PropTypes = {
    courses: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
}

function mapStateProps(state) {
    return {
        courses: state.courses
    }
}

const connectedStateAndProps = connect(mapStateProps)

export default connectedStateAndProps(CoursesPage)