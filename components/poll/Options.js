import List from '../styles/List'

export default function Options ({options, handleRemove}) {
	return (
		<List>
			{options.map((option, index) => (
				<li key={option}>{option} <button onClick={((e) => (handleRemove(option)) )}><i>remove</i></button></li>
			))}
		</List>
	)
}