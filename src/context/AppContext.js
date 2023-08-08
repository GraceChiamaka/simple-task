import React, {createContext, useMemo, useState, useCallback} from 'react';
import { v4 as uuidv4 } from 'uuid';
export const AppContext = createContext({});

const AppContextProvider = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [tags, setTags] = useState([]);
    const [assignedUser, setAssignedUser] = useState("");

    
    const [todos, setTodos] = useState([
      {
        // id: uuid.v4(),
        id: uuidv4(),
        title: "Setup development environment",
        completed: true,
      },
      {
        // id: uuid.v4(),
        id: uuidv4(),
        title: "Develop website and add content",
        completed: false,
      },
      {
        // id: uuid.v4(),
        id: uuidv4(),
        title: "Deploy to live server",
        completed: false,
    },
    ])

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    const delTodo = useCallback((id) => {
        setTodos(
            ...todos.filter((todo) => {
            return todo.id !== id;
            }));
    }, [todos]);

    const handleChange = useCallback((id) => {
        setTodos(todos.map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        }))
    }, [todos]);

    const addTodoItem = useCallback((title) => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            assignedUser,
            tags,
            completed: false,
        };
        setTodos([...todos, newTodo]);
        setTags([]);
        closeModal();
    }, [assignedUser, tags, todos]);

    const addTag = useCallback((value) => {
        setTags([...tags, value])
    }, [tags])

    const handleDeleteTag = useCallback((tagId) => {
        const filteredTag = tags.filter(tag => tag.id !== tagId);
        setTags(filteredTag);
    },[tags])

    const handleSelect = (ev) => {
        setAssignedUser(ev.target.value)
    }


    const value = useMemo(() => ({
        showModal,
        todos,
        tags,
        openModal,
        closeModal,
        delTodo,
        handleChange,
        addTodoItem,
        handleSelect,
        addTag,
        handleDeleteTag
    }), [
        todos,
        showModal,
        tags,
        delTodo,
        handleChange,
        addTodoItem,
        addTag, 
        handleDeleteTag,
    ])
        
    return (
        <AppContext.Provider value={value}>{ props.children}</AppContext.Provider>
    )
}

export default AppContextProvider;