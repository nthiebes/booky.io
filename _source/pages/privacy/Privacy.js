/* eslint-disable max-lines */
/* eslint-disable no-script-url */
/* eslint-disable max-len */
/* eslint-disable react/jsx-no-literals */
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import * as Cookies from 'es-cookie';
import Page from '../../templates/page';
import { H1, H2, H3, H4 } from '../../atoms/headline';
import Link from '../../atoms/link';
import P from '../../atoms/paragraph';
import { List, ListItem } from '../../atoms/list';
import Section from '../../molecules/section';

export default class Privacy extends Component {
  static propTypes = {
    locale: PropTypes.string.isRequired
  }

  handleClick = () => {
    Cookies.set('gaDisabled', 'true', { expires: 18250,
      secure: process.env.NODE_ENV !== 'development'
    });
  }

  render() {
    const { locale } = this.props;

    return (
      <Page>
        <Section>
          { locale === 'en' && (
            <Fragment>
              <H1>Privacy Policy</H1>

              <H2>1. An overview of data protection</H2>

              <H3 id="overview">General information</H3>
              <P>The following information will provide you with an easy to navigate overview of what will happen with your personal data when you visit this website. The term „personal data“ comprises all data that can be used to personally identify you. For detailed information about the subject matter of data protection, please consult our Data Protection Declaration, which we have included beneath this copy.</P>

              <H3>Data recording on this website</H3>
              
              <H4>Who is the responsible party for the recording of data on this website (i.e. the „controller“)?</H4>
              <P>The data on this website is processed by the operator of the website, whose contact information is available under section „Information Required by Law“ on this website.</P>
              
              <H4>How do we record your data?</H4>
              <P>We collect your data as a result of your sharing of your data with us. This may, for instance be information you enter into our contact form.</P>
              <P>Our IT systems automatically record other data when you visit our website. This data comprises primarily technical information (e.g. web browser, operating system or time the site was accessed). This information is recorded automatically when you access this website.</P>
              
              <H4>What are the purposes we use your data for?</H4>
              <P>A portion of the information is generated to guarantee the error free provision of the website. Other data may be used to analyse your user patterns.</P>
              
              <H4>What rights do you have as far as your information is concerned?</H4>
              <P>You have the right to receive information about the source, recipients and purposes of your archived personal data at any time without having to pay a fee for such disclosures. You also have the right to demand that your data are rectified or eradicated. Please do not hesitate to contact us at any time under the address disclosed in section „Information Required by Law“ on this website if you have questions about this or any other data protection related issues. You also have the right to log a complaint with the competent supervising agency.</P>
              <P>Moreover, under certain circumstances, you have the right to demand the restriction of the processing of your personal data. For details, please consult the Data Protection Declaration under section „Right to Restriction of Data Processing.“</P>

              <H3>Analysis tools and tools provided by third parties</H3>
              <P>There is a possibility that your browsing patterns will be statistically analysed when your visit this website. Such analyses are performed primarily with cookies and with what we refer to as analysis programmes. As a rule, the analyses of your browsing patterns are conducted anonymously; i.e. the browsing patterns cannot be traced back to you.</P>
              <P>You have the option to object to such analyses or you can prevent their performance by not using certain tools. For detailed information about the tools and about your options to object, please consult our Data Protection Declaration below.</P>

              <H2 id="hosting">2. Hosting and Content Delivery Networks (CDN)</H2>

              <H3>External Hosting</H3>
              <P>This website is hosted by an external service provider (host). Personal data collected on this website are stored on the servers of the host. These may include, but are not limited to, IP addresses, contact requests, metadata and communications, contract information, contact information, names, web page access, and other data generated through a web site.</P>
              <P>The host is used for the purpose of fulfilling the contract with our potential and existing customers (Art. 6 para. 1 lit. b DSGVO) and in the interest of secure, fast and efficient provision of our online services by a professional provider (Art. 6 para. 1 lit. f DSGVO).</P>
              <P>Our host will only process your data to the extent necessary to fulfil its performance obligations and to follow our instructions with respect to such data.</P>
              
              <H3>Cloudflare</H3>
              <P>We use the “Cloudflare” service provided by Cloudflare, Inc. 665 3rd St. #200, San Francisco, CA 94107, USA. (hereinafter referred to as “Cloudflare”).</P>
              <P>Cloudflare offers a content delivery network with DNS that is available worldwide. As a result, the information transfer that occurs between your browser and our website is technically routed via Cloudflare’s network. This enables Cloudflare to analyze data transactions between your browser and our website and to work as a filter between our servers and potentially malicious data traffic from the Internet. In conjunction with this, Cloudflare may also use cookies. However, these cookies will only be used for the purpose described herein. </P>
              <P>We have executed a contract processing agreement with Cloudflare. Cloudflare is also a certified participant of the “EU-US Privacy Shield Framework.” Cloudflare has undertaken to handle all personal data originating from the member states of the European Union (EU) in compliance with the “Privacy Shield Framework.”</P>
              <P>The use of Cloudflare is based on our legitimate interest in a provision of our website offerings that is as error free and secure as possible (Art. 6 Sect. 1 lit. f GDPR).</P>
              <P>For more information on Cloudflare’s security precautions and data privacy policies, please follow this link: <Link target="_blank" href="https://www.cloudflare.com/privacypolicy/">https://www.cloudflare.com/privacypolicy/</Link></P>

              <H4>Execution of a contract data processing agreement</H4>
              <P>In order to guarantee processing in compliance with data protection regulations, we have concluded an order processing contract with our host.</P>

              <H2 id="general">3. General information and mandatory information</H2>

              <H3>Data protection</H3>
              <P>The operators of this website and its pages take the protection of your personal data very seriously. Hence, we handle your personal data as confidential information and in compliance with the statutory data protection regulations and this Data Protection Declaration.</P>
              <P>Whenever you use this website, a variety of personal information will be collected. Personal data comprises data that can be used to personally identify you. This Data Protection Declaration explains which data we collect as well as the purposes we use this data for. It also explains how, and for which purpose the information is collected.</P>
              <P>We herewith advise you that the transmission of data via the Internet (i.e. through e-mail communications) may be prone to security gaps. It is not possible to completely protect data against third party access.</P>

              <H3>Information about the responsible party (referred to as the „controller“ in the GDPR)</H3>
              <P>The data processing controller on this website is:</P>
              <P>Nico Thiebes
                <br /> Wilseder Ring 43
                <br /> 21079 Hamburg
              </P>

              <P>E-mail: <Link href="mailto:privacy@booky.io">{ 'privacy@booky.io' }</Link></P>
              <P>The controller is the natural person or legal entity that single-handedly or jointly with others makes decisions as to the purposes of and resources for the processing of personal data (e.g. names, e-mail addresses, etc.).</P>

              <H3>Revocation of your consent to the processing of data</H3>
              <P>A wide range of data processing transactions are possible only subject to your express consent. You can also revoke at any time any consent you have already given us. To do so, all you are required to do is sent us an informal notification via e-mail. This shall be without prejudice to the lawfulness of any data collection that occurred prior to your revocation.</P>

              <H3>Right to object to the collection of data in special cases; right to object to direct advertising (Art. 21 GDPR)</H3>
              <P>IN THE EVENT THAT DATA ARE PROCESSED ON THE BASIS OF ART. 6 SECT. 1 LIT. E OR F GDPR, YOU HAVE THE RIGHT TO AT ANY TIME OBJECT TO THE PROCESSING OF YOUR PERSONAL DATA BASED ON GROUNDS ARISING FROM YOUR UNIQUE SITUATION. THIS ALSO APPLIES TO ANY PROFILING BASED ON THESE PROVISIONS. TO DETERMINE THE LEGAL BASIS, ON WHICH ANY PROCESSING OF DATA IS BASED, PLEASE CONSULT THIS DATA PROTECTION DECLARATION. IF YOU LOG AN OBJECTION, WE WILL NO LONGER PROCESS YOUR AFFECTED PERSONAL DATA, UNLESS WE ARE IN A POSITION TO PRESENT COMPELLING PROTECTION WORTHY GROUNDS FOR THE PROCESSING OF YOUR DATA, THAT OUTWEIGH YOUR INTERESTS, RIGHTS AND FREEDOMS OR IF THE PURPOSE OF THE PROCESSING IS THE CLAIMING, EXERCISING OR DEFENCE OF LEGAL ENTITLEMENTS (OBJECTION PURSUANT TO ART. 21 SECT. 1 GDPR).</P>
              <P>IF YOUR PERSONAL DATA IS BEING PROCESSED IN ORDER TO ENGAGE IN DIRECT ADVERTISING, YOU HAVE THE RIGHT TO AT ANY TIME OBJECT TO THE PROCESSING OF YOUR AFFECTED PERSONAL DATA FOR THE PURPOSES OF SUCH ADVERTISING. THIS ALSO APPLIES TO PROFILING TO THE EXTENT THAT IT IS AFFILIATED WITH SUCH DIRECT ADVERTISING. IF YOU OBJECT, YOUR PERSONAL DATA WILL SUBSEQUENTLY NO LONGER BE USED FOR DIRECT ADVERTISING PURPOSES (OBJECTION PURSUANT TO ART. 21 SECT. 2 GDPR).</P>

              <H3>Right to log a complaint with the competent supervisory agency</H3>
              <P>In the event of violations of the GDPR, data subjects are entitled to log a complaint with a supervisory agency, in particular in the member state where they usually maintain their domicile, place of work or at the place where the alleged violation occurred. The right to log a complaint is in effect regardless of any other administrative or court proceedings available as legal recourses.</P>

              <H3>Right to data portability</H3>
              <P>You have the right to demand that we hand over any data we automatically process on the basis of your consent or in order to fulfil a contract be handed over to you or a third party in a commonly used, machine readable format. If you should demand the direct transfer of the data to another controller, this will be done only if it is technically feasible.</P>

              <H3>SSL and/or TLS encryption</H3>
              <P>For security reasons and to protect the transmission of confidential content, such as purchase orders or inquiries you submit to us as the website operator, this website uses either an SSL or a TLS encryption programme. You can recognise an encrypted connection by checking whether the address line of the browser switches from „http://“ to „https://“ and also by the appearance of the lock icon in the browser line.</P>
              <P>If the SSL or TLS encryption is activated, data you transmit to us cannot be read by third parties.</P>

              <H3>Information about, rectification and eradication of data</H3>
              <P>Within the scope of the applicable statutory provisions, you have the right to at any time demand information about your archived personal data, their source and recipients as well as the purpose of the processing of your data. You may also have a right to have your data rectified or eradicated. If you have questions about this subject matter or any other questions about personal data, please do not hesitate to contact us at any time at the address provided in section „Information Required by Law.“</P>

              <H3>Right to demand processing restrictions</H3>
              <P>You have the right to demand the imposition of restrictions as far as the processing of your personal data is concerned. To do so, you may contact us at any time at the address provided in section „Information Required by Law.“ The right to demand restriction of processing applies in the following cases:</P>
              <List>
                <ListItem>In the event that you should dispute the correctness of your data archived by us, we will usually need some time to verify this claim. During the time that this investigation is ongoing, you have the right to demand that we restrict the processing of your personal data.</ListItem>
                <ListItem>If the processing of your personal data was/is conducted in an unlawful manner, you have the option to demand the restriction of the processing of your data in lieu of demanding the eradication of this data.</ListItem>
                <ListItem>If we do not need your personal data any longer and you need it to exercise, defend or claim legal entitlements, you have the right to demand the restriction of the processing of your personal data instead of its eradication.</ListItem>
                <ListItem>If you have raised an objection pursuant to Art. 21 Sect. 1 GDPR, your rights and our rights will have to be weighed against each other. As long as it has not been determined whose interests prevail, you have the right to demand a restriction of the processing of your personal data.</ListItem>
              </List>
              <P>If you have restricted the processing of your personal data, these data – with the exception of their archiving – may be processed only subject to your consent or to claim, exercise or defend legal entitlements or to protect the rights of other natural persons or legal entities or for important public interest reasons cited by the European Union or a member state of the EU.</P>

              <H2 id="data">4. Recording of data on this website</H2>

              <H3>Cookies</H3>
              <P>Our websites and pages use what the industry refers to as “cookies.” Cookies are small text tiles that do not cause any damage to your device. They are either stored temporarily for the duration of a session (session cookies) or they are permanently archived on your device (permanent cookies). Session cookies are automatically deleted once you terminate your visit. Permanent cookies remain archived on your device until you actively delete them or they are automatically eradicated by your web browser.</P>
              {/* <P>In some cases it is possible that third party cookies are stored on your device once you enter our site (third party cookies). These cookies enable you or us to take advantage of certain services offered by the third party (e.g. cookies for the processing of payment services).</P> */}
              <P>Cookies have a variety of functions. Many cookies are technically essential since certain website functions would not work in the absence of the cookies (e.g. the shopping cart function or the display of videos). The purpose of other cookies may be the analysis of user patterns or the display of promotional messages.</P>
              <P>Technically essential cookies (e.g. shopping cart cookies) are archived on the basis of Art. 6 Sect. 1 lit. f GDPR. We have a legitimate interest in in storing these cookies to ensure the technically error-free and optimized delivery of our services. Other cookies are stored only subject to your consent on the basis of Art. 6 Sect. 1 lit. a GDPR. You do have the right to revoke such consent at any time, which will affect all future data transactions.</P>
              <P>You have the option to set up your browser in such a manner that you will be notified any time cookies are placed and to permit the acceptance of cookies only in specific cases. You may also exclude the acceptance of cookies in certain cases or in general or activate the delete function for the automatic eradication of cookies when the browser closes. If cookies are deactivated, the functions of this website may be limited.</P>
              <P>In the event that third party cookies are used or if cookies are used for analytical purposes, we will separately notify you in conjunction with this Data Protection Policy and, if applicable, ask for your consent.</P>

              <H3>Contact form</H3>
              <P>If you submit inquiries to us via our contact form, the information provided in the contact form as well as any contact information provided therein will be stored by us in order to handle your inquiry and in the event that we have further questions. We will not share this information without your consent.</P>
              <P>The processing of these data is based on Art. 6 para. 1 lit. b GDPR, if your request is related to the execution of a contract or if it is necessary to carry out pre-contractual measures. In all other cases the processing is based on our legitimate interest in the effective processing of the requests addressed to us (Art. 6 Para. 1 lit. f DSGVO) or on your agreement (Art. 6 Para. 1 lit. a DSGVO) if this has been requested.</P>
              <P>The information you have entered into the contact form shall remain with us until you ask us to eradicate the data, revoke your consent to the archiving of data or if the purpose for which the information is being archived no longer exists (e.g. after we have concluded our response to your inquiry). This shall be without prejudice to any mandatory legal provisions – in particular retention periods.</P>

              <H3>Request by e-mail</H3>
              <P>If you contact us by e-mail, your request, including all resulting personal data (name, request) will be stored and processed by us for the purpose of processing your request. We do not pass these data on without your consent.</P>
              <P>The processing of these data is based on Art. 6 para. 1 lit. b GDPR, if your request is related to the execution of a contract or if it is necessary to carry out pre-contractual measures. In all other cases, the processing is based on your consent (Article 6 (1) a GDPR) and/or on our legitimate interests (Article 6 (1) (f) GDPR), since we have a legitimate interest in the effective processing of requests addressed to us.</P>
              <P>The data sent by you to us via contact requests remain with us until you request us to delete, revoke your consent to the storage or the purpose for the data storage lapses (e.g. after completion of your request). Mandatory statutory provisions - in particular statutory retention periods - remain unaffected.</P>

              <H3>Registration on this website</H3>
              <P>You have the option to register on this website to be able to use additional website functions. We shall use the data you enter only for the purpose of using the respective offer or service you have registered for. The required information we request at the time of registration must be entered in full. Otherwise we shall reject the registration.</P>
              <P>To notify you of any important changes to the scope of our portfolio or in the event of technical modifications, we shall use the e-mail address provided during the registration process.</P>
              <P>We shall process the data entered during the registration process on the basis of your consent (Art. 6 Sect. 1 lit. a GDPR).</P>
              <P>The data recorded during the registration process shall be stored by us as long as you are registered on this website. Subsequently, such data shall be deleted. This shall be without prejudice to mandatory statutory retention obligations.</P>

              <H2 id="tools">5. Analysis tools and advertising</H2>

              <H3>Google Analytics</H3>
              <P>This website uses functions of the web analysis service Google Analytics. The provider of this service is Google Ireland Limited („Google“), Gordon House, Barrow Street, Dublin 4, Ireland.</P>
              <P>Google Analytics uses so-called cookies. Cookies are text files, which are stored on your computer and that enable an analysis of the use of the website by users. The information generated by cookies on your use of this website is usually transferred to a Google server in the United States, where it is stored.</P>
              <P>The storage of Google Analytics cookies and the utilization of this analysis tool are based on Art. 6 Sect. 1 lit. f GDPR. The operator of this website has a legitimate interest in the analysis of user patterns to optimize both, the services offered online and the operator’s advertising activities. If a corresponding agreement has been requested (e.g. an agreement to the storage of cookies), the processing takes place exclusively on the basis of Art. 6 para. 1 lit. a GDPR; the agreement can be revoked at any time.</P>
              
              <H4>IP anonymization</H4>
              <P>On this website, we have activated the IP anonymization function. As a result, your IP address will be abbreviated by Google within the member states of the European Union or in other states that have ratified the Convention on the European Economic Area prior to its transmission to the United States. The full IP address will be transmitted to one of Google’s servers in the United States and abbreviated there only in exceptional cases. On behalf of the operator of this website, Google shall use this information to analyse your use of this website to generate reports on website activities and to render other services to the operator of this website that are related to the use of the website and the Internet. The IP address transmitted in conjunction with Google Analytics from your browser shall not be merged with other data in Google’s possession.</P>
              
              <H4>Browser plug-in</H4>
              <P>You do have the option to prevent the archiving of cookies by making pertinent changes to the settings of your browser software. However, we have to point out that in this case you may not be able to use all of the functions of this website to their fullest extent. Moreover, you have the option prevent the recording of the data generated by the cookie and affiliated with your use of the website (including your IP address) by Google as well as the processing of this data by Google by downloading and installing the browser plug-in available under the following link: <Link href="https://tools.google.com/dlpage/gaoptout?hl=en" target="_blank">https://tools.google.com/dlpage/gaoptout?hl=en</Link></P>
              
              <H4>Objection to the recording of data</H4>
              <P>You have the option to prevent the recording of your data by Google Analytics by clicking on the following link. This will result in the placement of an opt out cookie, which prevents the recording of your data during future visits to this website: <Link role="button" href="#" onClick={ this.handleClick }>Google Analytics deactivation</Link></P>
              <P>For more information about the handling of user data by Google Analytics, please consult Google’s Data Privacy Declaration at: <Link href="https://support.google.com/analytics/answer/6004245?hl=en" target="_blank">https://support.google.com/analytics/answer/6004245?hl=en</Link></P>
              
              <H4>Contract data processing</H4>
              <P>We have executed a contract data processing agreement with Google and are implementing the stringent provisions of the German data protection agencies to the fullest when using Google Analytics.</P>
              
              <H4>Archiving period</H4>
              <P>Data on the user or incident level stored by Google linked to cookies, user IDs or advertising IDs (e.g. DoubleClick cookies, Android advertising ID) will be anonymized or deleted after 14 month. For details please click the following link: <Link href="https://support.google.com/analytics/answer/7667196?hl=en" target="_blank">https://support.google.com/analytics/answer/7667196?hl=en</Link></P>
            </Fragment>
          ) }
          { locale === 'de' && (
            <Fragment>
              <H1>Datenschutzerklärung</H1>

              <H2 id="overview">1. Datenschutz auf einen Blick</H2>
              
              <H3>Allgemeine Hinweise</H3>
              <P>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.</P>
              
              <H3>Datenerfassung auf dieser Website</H3>
              
              <H4>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</H4>
              <P>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.</P>
              
              <H4>Wie erfassen wir Ihre Daten?</H4>
              <P>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.</P>
              <P>Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.</P>
              
              <H4>Wofür nutzen wir Ihre Daten?</H4>
              <P>Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.</P>
              
              <H4>Welche Rechte haben Sie bezüglich Ihrer Daten?</H4>
              <P>Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.</P>
              <P>Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Details hierzu entnehmen Sie der Datenschutzerklärung unter „Recht auf Einschränkung der Verarbeitung“.</P>
              
              <H3>Analyse-Tools und Tools von Drittanbietern</H3>
              <P>Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit Cookies und mit sogenannten Analyseprogrammen. Die Analyse Ihres Surf-Verhaltens erfolgt in der Regel anonym; das Surf-Verhalten kann nicht zu Ihnen zurückverfolgt werden.</P>
              <P>Sie können dieser Analyse widersprechen oder sie durch die Nichtbenutzung bestimmter Tools verhindern. Detaillierte Informationen zu diesen Tools und über Ihre Widerspruchsmöglichkeiten finden Sie in der folgenden Datenschutzerklärung.</P>
              
              <H2 id="hosting">2. Hosting und Content Delivery Networks (CDN)</H2>
              
              <H3>Externes Hosting</H3>
              <P>Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Webseitenzugriffe und sonstige Daten, die über eine Website generiert werden, handeln.</P>
              <P>Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).</P>
              <P>Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen.</P>
              
              <H4>Abschluss eines Vertrages über Auftragsverarbeitung</H4>
              <P>Um die datenschutzkonforme Verarbeitung zu gewährleisten, haben wir einen Vertrag über Auftragsverarbeitung mit unserem Hoster geschlossen.</P>
              
              <H3>Cloudflare</H3>
              <P>Wir nutzen den Service „Cloudflare“. Anbieter ist die Cloudflare, Inc. 665 3rd St. #200, San Francisco, CA 94107, USA (im Folgenden „Cloudflare”).</P>
              <P>Cloudflare bietet ein weltweit verteiltes Content Delivery Network mit DNS an. Dabei wird technisch der Informationstransfer zwischen Ihrem Browser und unserer Webseite über das Netzwerk von Cloudflare geleitet. Das versetzt Cloudflare in die Lage, den Datenverkehr zwischen Ihrem Browser und unserer Webseite zu analysieren und als Filter zwischen unseren Servern und potenziell bösartigem Datenverkehr aus dem Internet zu dienen. Hierbei kann Cloudflare auch Cookies einsetzen, die jedoch allein zum hier beschriebenen Zweck eingesetzt werden.</P>
              <P>Wir haben mit Cloudflare einen Vertrag über Auftragsverarbeitung abgeschlossen. Cloudflare ist zudem zertifizierter Teilnehmer des „EU-US Privacy Shield Frameworks“. Cloudflare hat sich dazu verpflichtet, sämtliche aus den Mitgliedstaaten der Europäischen Union (EU) erhaltenen personenbezogenen Daten gemäß dem „Privacy Shield Framework“ zu handhaben.</P>
              <P>Der Einsatz von Cloudflare beruht auf unserem berechtigten Interesse an einer möglichst fehlerfreien und sicheren Bereitstellung unseres Webangebotes (Art. 6 Abs. 1 lit. f DSGVO).</P>
              <P>Weitere Informationen zum Thema Sicherheit und Datenschutz bei Cloudflare finden Sie hier: <Link target="_blank" href="https://www.cloudflare.com/privacypolicy/">https://www.cloudflare.com/privacypolicy/</Link></P>

              <H2 id="general">3. Allgemeine Hinweise und Pflichtinformationen</H2>
              
              <H3>Datenschutz</H3>
              <P>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</P>
              <P>Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.</P>
              <P>Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.</P>
              
              <H3>Hinweis zur verantwortlichen Stelle</H3>
              <P>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</P>
              <P>Nico Thiebes
                <br /> Wilseder Ring 43
                <br /> 21079 Hamburg
              </P>

              <P>E-Mail: <Link href="mailto:privacy@booky.io">{ 'privacy@booky.io' }</Link></P>
              <P>Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.</P>
              
              <H3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</H3>
              <P>Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.</P>
              
              <H3>Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)</H3>
              <P><strong>Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 Lit. e oder f DSGVO erfolgt, haben Sie jederzeit das Recht, aus Gründen, die sich aus ihrer besonderen Situation ergeben, gegen die Verarbeitung ihrer personenbezogenen Daten Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling. Die jeweilige Rechtsgrundlage, auf denen eine Verarbeitung beruht, entnehmen Sie dieser Datenschutzerklärung. Wenn Sie Widerspruch einlegen, werden wir Ihre betroffenen personenbezogenen Daten nicht mehr verarbeiten, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von rechtsansprüchen (Widerspruch nach Art. 21 Abs. 1 DSGVO).</strong></P>
              <P><strong>Werden Ihre personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, so haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung Sie betreffender personenbezogener Daten zum Zwecke derartiger Werbung einzulegen; dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht. Wenn Sie widersprechen, werden ihre personenbezogenen Daten anschliessend nicht mehr zum Zwecke der Direktwerbung verwendet (Widerspruch nach Art. 21 Abs. 2 DSGVO).</strong></P>
              
              <H3>Beschwerderecht bei der zuständigen Aufsichtsbehörde</H3>
              <P>Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.</P>
              
              <H3>Recht auf Datenübertragbarkeit</H3>
              <P>Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.</P>
              
              <H3>SSL- bzw. TLS-Verschlüsselung</H3>
              <P>Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.</P>
              <P>Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.</P>
              
              <H3>Auskunft, Löschung und Berichtigung</H3>
              <P>Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.</P>
              
              <H3>Recht auf Einschränkung der Verarbeitung</H3>
              <P>Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:</P>
              <List>
                <ListItem>Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</ListItem>
                <ListItem>Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.</ListItem>
                <ListItem>Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</ListItem>
                <ListItem>Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</ListItem>
              </List>
              <P>Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.</P>
              
              <H2 id="data">4. Datenerfassung auf dieser Website</H2>
              
              <H3>Cookies</H3>
              <P>Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind kleine Textdateien und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät gespeichert bis Sie diese selbst löschen oder eine automatische Lösung durch Ihren Webbrowser erfolgt.</P>
              {/* <P>Teilweise können auch Cookies von Drittunternehmen auf Ihrem Endgerät gespeichert werden, wenn Sie unsere Seite betreten (Third-Party-Cookies). Diese ermöglichen uns oder Ihnen die Nutzung bestimmter Dienstleistungen des Drittunternehmens (z.B. Cookies zur Abwicklung von Zahlungsdienstleistungen).</P> */}
              <P>Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da bestimmte Webseitenfunktionen ohne diese nicht funktionieren würden (z.B. die Warenkorbfunktion oder die Anzeige von Videos). Andere Cookies dienen dazu das Nutzerverhalten zu auszuwerten oder Werbung anzuzeigen.</P>
              <P>Technisch notwendige Cookies (z.B. Warenkorb-Cookies) werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert. Wir haben ein berechtigtes Interesse an der Speicherung von Cookies zur technisch fehlerfreien und optimierten Bereitstellung unserer Dienste. Andere Cookies werden nur mit Ihrer Einwilligung auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO gespeichert. Die Einwilligung ist jederzeit für die Zukunft widerrufbar.</P>
              <P>Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.</P>
              <P>Soweit Cookies von Drittunternehmen oder zu Analysezwecken eingesetzt werden, werden wir Sie hierüber im Rahmen dieser Datenschutzerklärung gesondert informieren und ggf. eine Einwilligung abfragen.</P>

              <H3>Kontaktformular</H3>
              <P>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</P>
              <P>Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.</P>
              <P>Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.</P>
              
              <H3>Anfrage per E-Mail</H3>
              <P>Wenn Sie uns per E-Mail kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</P>
              <P>Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) und/oder auf unseren berechtigten Interessen (Art. 6 Abs. 1 lit. f DSGVO), da wir ein berechtigtes Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen haben.</P>
              <P>Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.</P>
              
              <H3>Registrierung auf dieser Website</H3>
              <P>Sie können sich auf dieser Website registrieren, um zusätzliche Funktionen auf der Seite zu nutzen. Die dazu eingegebenen Daten verwenden wir nur zum Zwecke der Nutzung des jeweiligen Angebotes oder Dienstes, für den Sie sich registriert haben. Die bei der Registrierung abgefragten Pflichtangaben müssen vollständig angegeben werden. Anderenfalls werden wir die Registrierung ablehnen.</P>
              <P>Für wichtige Änderungen etwa beim Angebotsumfang oder bei technisch notwendigen Änderungen nutzen wir die bei der Registrierung angegebene E-Mail-Adresse, um Sie auf diesem Wege zu informieren.</P>
              <P>Die Verarbeitung der bei der Registrierung eingegebenen Daten erfolgt zum Zwecke der Durchführung des durch die Registrierung begründeten Nutzungsverhältnisses und ggf. zur Anbahnung weiterer Verträge (Art. 6 Abs. 1 lit. b DSGVO).</P>
              <P>Die bei der Registrierung erfassten Daten werden von uns gespeichert, solange Sie auf dieser Website registriert sind und werden anschließend gelöscht. Gesetzliche Aufbewahrungsfristen bleiben unberührt.</P>
              
              <H2 id="tools">5. Analyse-Tools und Werbung</H2>
              
              <H3>Google Analytics</H3>
              <P>Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist die Google Ireland Limited („Google“), Gordon House, Barrow Street, Dublin 4, Irland.</P>
              <P>Google Analytics verwendet so genannte „Cookies“. Das sind Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglichen. Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert.</P>
              <P>Die Speicherung von Google-Analytics-Cookies und die Nutzung dieses Analyse-Tools erfolgen auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der Analyse des Nutzerverhaltens, um sowohl sein Webangebot als auch seine Werbung zu optimieren. Sofern eine entsprechende Einwilligung abgefragt wurde (z. B. eine Einwilligung zur Speicherung von Cookies), erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar.</P>
              
              <H4>IP Anonymisierung</H4>
              <P>Wir haben auf dieser Website die Funktion IP-Anonymisierung aktiviert. Dadurch wird Ihre IP-Adresse von Google innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum vor der Übermittlung in die USA gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt. Im Auftrag des Betreibers dieser Website wird Google diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die Websiteaktivitäten zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen gegenüber dem Websitebetreiber zu erbringen. Die im Rahmen von Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt.</P>
              
              <H4>Browser Plugin</H4>
              <P>Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website vollumfänglich werden nutzen können. Sie können darüber hinaus die Erfassung der durch den Cookie erzeugten und auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem Sie das unter dem folgenden Link verfügbare Browser-Plugin herunterladen und installieren: <Link href="https://tools.google.com/dlpage/gaoptout?hl=de" target="_blank">https://tools.google.com/dlpage/gaoptout?hl=de</Link></P>
              
              <H4>Widerspruch gegen Datenerfassung</H4>
              <P>Sie können die Erfassung Ihrer Daten durch Google Analytics verhindern, indem Sie auf folgenden Link klicken. Es wird ein Opt-Out-Cookie gesetzt, der die Erfassung Ihrer Daten bei zukünftigen Besuchen dieser Website verhindert: <Link role="button" href="#" onClick={ this.handleClick }>Google Analytics deaktivieren</Link></P>
              <P>Mehr Informationen zum Umgang mit Nutzerdaten bei Google Analytics finden Sie in der Datenschutzerklärung von Google: <Link href="https://support.google.com/analytics/answer/6004245?hl=de" target="_blank">https://support.google.com/analytics/answer/6004245?hl=de</Link></P>
              
              <H4>Auftragsverarbeitung</H4>
              <P>Wir haben mit Google einen Vertrag zur Auftragsverarbeitung abgeschlossen und setzen die strengen Vorgaben der deutschen Datenschutzbehörden bei der Nutzung von Google Analytics vollständig um.</P>
              
              <H4>Speicherdauer</H4>
              <P>Bei Google gespeicherte Daten auf Nutzer- und Ereignisebene, die mit Cookies, Nutzerkennungen (z. B. User ID) oder Werbe-IDs (z. B. DoubleClick-Cookies, Android-Werbe-ID) verknüpft sind, werden nach 14 Monaten anonymisiert bzw. gelöscht. Details hierzu ersehen Sie unter folgendem Link: <Link href="https://support.google.com/analytics/answer/7667196?hl=de" target="_blank">https://support.google.com/analytics/answer/7667196?hl=de</Link></P>
            </Fragment>
          ) }
        </Section>
      </Page>
    );
  }
}
