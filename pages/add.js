import { useState } from 'react'
import styles from '../styles/Home.module.css'

import Options from '../components/poll/Options'

export default function AddPoll() {
	
	const [options, setOptions] = useState(['one', 'two', 'three'])

	const [newOpt, setNewOpt] = useState('')

	const addOption = (e) => {
		e.preventDefault()
		setOptions([...options, newOpt])
		setNewOpt('')
	}

	const removeOption = (elem) => {
		setOptions(options.filter((opt) => (
			elem !== opt
		)) )
	}

	return (
		<>
			<h1 className={styles.title}>
			New Poll
			</h1>
			<form>
				<label>Title</label>
				<input />
				<label>Question</label>
				<input />
				<label>Option #{options.length+1}</label>
				<input value={newOpt} onChange={(e) => (setNewOpt(e.target.value))}/>
				<button onClick={addOption}>Add</button>
			</form>		
			<Options options={options} handleRemove={removeOption}></Options>
		</>
	)
}