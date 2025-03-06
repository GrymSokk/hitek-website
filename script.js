body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
    color: #333;
    line-height: 1.6;
}

header {
    background-color: #333;
    color: white;
    padding: 15px 0;
    text-align: center;
}

nav ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
}

nav ul li {
    margin: 0 15px;
}

nav ul li a {
    color: white;
    text-decoration: none;
    font-weight: bold;
}

nav ul li a:focus, nav ul li a:hover {
    text-decoration: underline;
}

main {
    padding: 20px;
    max-width: 800px;
    margin: auto;
    background: white;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1, h2 {
    color: #222;
}

button {
    background-color: #007BFF;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
}

button:hover {
    background-color: #0056b3;
}

footer {
    text-align: center;
    padding: 10px;
    background-color: #333;
    color: white;
    margin-top: 20px;
}

@media (max-width: 600px) {
    main {
        width: 95%;
    }
    nav ul {
        flex-direction: column;
        text-align: center;
    }
    nav ul li {
        margin-bottom: 10px;
    }
}
