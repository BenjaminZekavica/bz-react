import { Divider } from '@mantine/core';
import PreHeadline from '../components/preheadline';
import Headline from '../components/headline';

function Heading(props) {
    const prehead = props.preheadline;
    const headline = props.headline;
    const headlineSize = props.headlineSize;
    const hasBorder = props.hasBorder;
    const align = props.align;


    return (
        <div className={ align ? 'c-heading '+ '--'+align : 'c-heading' }>
            { 
                prehead ?
                    <PreHeadline 
                        content={prehead}
                    />
                : ''
            }
            { 
                headline ?
                    <Headline
                        size={ headlineSize ? headlineSize : 2}
                        content={headline}
                    />
                : ''
            }
            { hasBorder || hasBorder == undefined ? 
                    <Divider className="c-heading__line" size="sm" />
                :  ''
            }
        </div>
    );
}
export default Heading;