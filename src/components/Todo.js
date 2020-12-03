import React from 'react';

 class Todo extends React.Component {

    handleClick = () => {
        this.props.handleToggleItem(this.props.item.id)
    }

    render() {
        return (
            <div onClick={this.handleClick} className={this.props.item.completed ? 'completed':''}>
                <p>{this.props.item.task}</p>
            </div>
        )
    }

}

export default Todo;