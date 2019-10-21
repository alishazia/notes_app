import React, { Component } from 'react';
import './App.css';
import { css } from 'glamor'

// import Form from './components/Form'
import Form from '../src/Form.js';
// import Notes from './components/Notes'
import Notes from '../src/Notes.js';

const styles = {
  container: {
    width: 360,
    margin: '0 auto',
    borderBottom: '1px solid #ededed',
    boxShadow:"2px 2px 6px 0px dimgray"
  },
  form: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    height: 35,
    width: '360px',
    border: 'none',
    outline: 'none',
    marginLeft: 10,
    fontSize: 20,
    padding: 8,
  }
}
  export default class App extends Component {
  constructor() {
    super();
    this.state = { notes: [], filter: 'none' }
    }

    // componentDidMount(){
      createNote = async note => {
        const notes = [note, ...this.state.notes]
        const newNotes = this.state.notes
        this.setState({ notes })
      }
      
      updateNote = async note => {
        const updatedNote = {
          ...note,
          status: note.status === 'new' ? 'completed' : 'new'
        }
        const index = this.state.notes.findIndex(i => i.id === note.id)
        const notes = [...this.state.notes]
        notes[index] = updatedNote
        this.setState({ notes })
      }
      
      deleteNote = async note => {
        const input = { id: note.id }
        const notes = this.state.notes.filter(n => n.id !== note.id)
        this.setState({ notes })
      }
      
      updateFilter = filter => this.setState({ filter })
    // }
    render(){
      let { notes, filter } = this.state
      if (filter === 'completed') {
        notes = notes.filter(n => n.status === 'completed')
      }
      if (filter === 'new') {
        notes = notes.filter(n => n.status === 'new')
      }
      
      return (
        <div {...css(styles.container)}>
          <p {...css(styles.title)}>Notes</p>
          <Form
            createNote={this.createNote}
          />
          <Notes
            notes={notes}
            deleteNote={this.deleteNote}
            updateNote={this.updateNote}
          />
          <div {...css(styles.bottomMenu)}>
            <p
              onClick={() => this.updateFilter('none')}
              {...css([ styles.menuItem, 
                // getStyle('none', filter)
              ])}
            >All</p>
            <p
              onClick={() => this.updateFilter('completed')}
              {...css([styles.menuItem,
                //  getStyle('completed', filter)
                ])}
            >Completed</p>
            <p
              onClick={() => this.updateFilter('new')}
              {...css([styles.menuItem, 
                // getStyle('new', filter)
              ])}
            >Pending</p>
          </div>
        </div>
      );
    }
  
}

