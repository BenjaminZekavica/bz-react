import Text from '../components/text';

function Content(props) {
    const content = props.content; 

    return (
        <Text 
            content={content}
        />
    );
}
export default Content;