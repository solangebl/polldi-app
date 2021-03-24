import { useState } from 'react'
import styles from '../styles/Home.module.css'

import Options from '../components/poll/Options'

import Form from '../components/styles/Form'

export default function AddPoll() {

	const [options, setOptions] = useState(['one', 'two', 'three'])

	const [newOpt, setNewOpt] = useState('')

	const addOption = (e) => {
		e.preventDefault()
		if (newOpt !== '' && options.indexOf(newOpt) === -1) {
			setOptions([...options, newOpt])
			setNewOpt('')
		}
	}

	const removeOption = (elem) => {
		setOptions(options.filter((opt) => (
			elem !== opt
		)))
	}

	return (
		<>
			<h1 className={styles.title}>
				New Poll
			</h1>
			<Form>
				<label>Title</label>
				<input />
				<label>Question</label>
				<input />
				<label>Option #{options.length + 1}</label>
				<input className="w-75" value={newOpt} onChange={(e) => (setNewOpt(e.target.value))} />
				<button className="w-25" onClick={addOption}>Add</button>
				<button type="submit" >Save</button>
			</Form>
			<Options options={options} handleRemove={removeOption}></Options>
		</>
	)
}