import React, { Component } from 'react';

import Page from '../../04_templates/page';
import Headline from '../../01_atoms/headline/Headline.jsx';
import P from '../../01_atoms/paragraph/Paragraph.jsx';

/**
 * React component
 * 
 * @class AboutPage
 * @classdesc 04_pages/about/AboutPage
 */
export default class AboutPage extends Component {
    render() {
        return (
            <Page>
                <main>
                    <Headline type={ 1 } text="Servus, wie geht's dir? Lorem ipsum dolor sit amet!" />
                    <P>{`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet..`}</P>
                    <P>{`Web forms are the evolution of their paper counterparts. 
                        A collection of labels, boxes and circles designed to constrain input and make it easier for data to be processed.`}</P>
                    <Headline type={ 1 } text="Servus, wie geht's?" />
                    <P>{`Lorem存有悲坐阿梅德，tempor labore sadipscing多年来，但是最精彩的UT labore等dolore直径tempor invidunt eirmod`}</P>
                    <Headline type={ 1 } text="Привет, как дела 123?" />
                    <P>{`أبجد هوز دولور الجلوس امات، tempor labore sadipscing على مر السنين، ولكن الأكثر إثارة التحرير labore آخرون غير مؤلمة بقطر tempor invidunt eirmod`}</P>
                    <P>{`Lorem Ipsum Dolor сидеть Амет, TEMPOR Лаборе sadipscing на протяжении многих лет, но самая захватывающая ут Лаборе и др Dolore диам TEMPOR invidunt eirmod`}</P>
                    <Headline type={ 1 } text="مرحبا كيف حالك 123؟" />
                    <Headline type={ 1 } text="你好，你怎么样 123？" />
                </main>
            </Page>
        );
    }
}
