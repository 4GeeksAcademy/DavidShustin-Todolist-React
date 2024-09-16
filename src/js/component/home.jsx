import React, { useState } from "react";



//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [toDos, setToDos] = useState([]);
	const handleAddToDo = (e) => {
		if (e.key === "Enter" && inputValue.trim() !== "")  {
			setToDos([...toDos, inputValue.trim()])
			setInputValue("");
		};
	};
	const handleDeleteToDo = (index) => {
		setToDos(toDos.filter((todo, i) => index !== i))
	}
	return (
		<div className=" container">
			<h1 className="text-center mt-4">Todo's</h1>
			<div className="card mx-auto" style={{ maxWidth: "800px" }}>
				<ul className="list-group list-group-flush d-flex align-items-center">
					<li className="list-group-item d-flex justify-content-center w-100">
						<input
							type="text"
							placeholder="What needs to be done?"
							value={inputValue}
							onChange={(e) => setInputValue(e.target.value)}
							onKeyDown={handleAddToDo}
							
						/>
					</li>
					{toDos.length === 0 ? (
						<li className="list-group-item">No tasks, Add a task</li>
					) : (
						toDos.map((todo, index) => (
							<li className="list-group-item w-100 d-flex justify-content-center" key={index}>
								<div className="list-item-todo">{todo}</div>
								<span className="x-container" onClick={() => handleDeleteToDo(index)}>
									<i className="fa-solid fa-x"></i>
								</span>
							</li>

						))
					)}
					
				</ul>
				<div className="card-footer text-secondary" >
					{toDos.length} {toDos.length === 1 ? "item" : "items"} left
				</div>
			</div>
		</div>
	);
};

export default Home;
