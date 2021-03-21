export default function Options ({options, handleRemove}) {
	return (
		<ul>
			{options.map((option, index) => (
				<li key={option}>{option} <button onClick={((e) => (handleRemove(option)) )}><i>remove</i></button></li>
			))}
		</ul>
	)
}