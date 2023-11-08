import { css } from "lit-element";

export default css `
body {
    background: linear-gradient(to right, #495170, #495170);
}

.form {
    background: linear-gradient(to right, #495170, #495170);
    padding: 98px;
    border-radius: 20px;
}

.form-check-input {
    margin-right: 10px;
}

.input-group-text {
    background-color: #CCCCCC;
    color: #ffffff;
}

.form-control::placeholder {
    color: #000000;
}

.form-control {
    background-color: #CCCCCC;
    color: #ffffff;
}

.btn {
    background: linear-gradient(to right, #495170, #495170);
    border-radius: 0 0 20px 20px;
    border: none;
}

/* Estilos para la imagen */
.image-container {
    position: relative;
}

.image-container img {
    position: relative;
    z-index: 1;
    margin-top: -8.5rem;
}
`
