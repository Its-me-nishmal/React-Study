export const onhandlechang = (e, setFd) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFd(prevState => ({ ...prevState, [name]: value }));
}

export const handlesub = (e, fd) => {
    e.preventDefault()
    console.log(fd)
}