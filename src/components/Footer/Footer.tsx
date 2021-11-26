const Footer = () => {
    const getYear = (): number => {
        const d = new Date();
        return d.getFullYear();
    };

    return <footer>&copy; {`zerops ${getYear()}`}</footer>;
};

export default Footer;
