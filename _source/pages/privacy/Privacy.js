/* eslint-disable max-len */
/* eslint-disable react/jsx-no-literals */
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Page from '../../templates/page';
import { H1, H2, H3 } from '../../atoms/headline';
import Link from '../../atoms/link';
import P from '../../atoms/paragraph';
import Section from '../../molecules/section';

export default class Privacy extends Component {
  render() {
    const { locale } = this.props;

    return (
      <Page>
        <Section>
          <H1>
            <FormattedMessage id="privacy.title" />
          </H1>
          { locale === 'en' && (
            <Fragment>
              <H2>
                <FormattedMessage id="privacy.1" />
              </H2>
              <P>
                <FormattedMessage id="privacy.2" />
              </P>
              <P>
                <FormattedMessage id="privacy.3" />
              </P>
              <H2>
                <FormattedMessage id="privacy.4" />
              </H2>
              <P>
                <FormattedMessage id="privacy.5" />
              </P>
              <P>
                <FormattedMessage id="privacy.6" />
              </P>
              <P>
                <i><FormattedMessage id="privacy.7" /></i>
              </P>
              <H2>
                <FormattedMessage id="privacy.8" />
              </H2>
              <P>
                <FormattedMessage id="privacy.9" />
              </P>
              <H2>
                <FormattedMessage id="privacy.10" />
              </H2>
              <P>
                <FormattedMessage id="privacy.11" />
              </P>
              <P>
                <i><FormattedMessage id="privacy.12" /></i>
              </P>
              <P>
                <FormattedMessage id="privacy.13" />
              </P>
              <H2>
                <FormattedMessage id="privacy.14" />
              </H2>
              <P>
                <FormattedMessage id="privacy.15" />
              </P>
              <H2>
                <FormattedMessage id="privacy.16" />
              </H2>
              <P>
                <FormattedMessage id="privacy.17" />
              </P>
              <H2>
                <FormattedMessage id="privacy.18" />
              </H2>
              <P>
                <FormattedMessage id="privacy.19" />
              </P>
              <P>
                <FormattedMessage id="privacy.20" />
              </P>
              <H2>
                <FormattedMessage id="privacy.21" />
              </H2>
              <P>
                <FormattedMessage id="privacy.22" />
                <Link target="_blank" href="https://tools.google.com/dlpage/gaoptout?hl=en">
                  { 'https://tools.google.com/dlpage/gaoptout?hl=en' }
                </Link>
                { '.' }
              </P>
              <P>
                <FormattedMessage id="privacy.23" />
              </P>
              <H2>
                <FormattedMessage id="privacy.24" />
              </H2>
              <P>
                <FormattedMessage id="privacy.25" />
              </P>
              <H2>
                <FormattedMessage id="privacy.26" />
              </H2>
              <P>
                <FormattedMessage id="privacy.27" />
              </P>
              <H2>
                <FormattedMessage id="privacy.28" />
              </H2>
              <P>
                <FormattedMessage id="privacy.29" />
              </P>
              <P>
                <FormattedMessage id="privacy.30" />
              </P>
              <H2>
                <FormattedMessage id="privacy.31" />
              </H2>
              <P>
                <FormattedMessage id="privacy.32" />
              </P>
              <P>
                <FormattedMessage id="privacy.33" />
                <Link href="mailto:hello@booky.io">{ 'hello@booky.io' }</Link>
              </P>
              <P>
                <FormattedMessage id="privacy.34" />
                <Link target="_blank" href="https://www.rhinosupport.com/">{ 'help desk software' }</Link>
                { '.' }
              </P>
            </Fragment>
          ) }
          { locale === 'de' && (
            <Fragment>
              <H2>1. Datenschutz auf einen Blick</H2>

              <H3>Allgemeine Hinweise</H3>
              <P>Die folgenden Hinweise geben einen einfachen überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.</P>
              
              <H3>Datenerfassung auf dieser Website</H3>
              <P noPadding><strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong></P>
              <P>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.</P>
              <P noPadding><strong>Wie erfassen wir Ihre Daten?</strong></P>
              <P>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.&nbsp;B. um Daten handeln, die Sie in ein Kontaktformular eingeben.</P> <P>Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.&nbsp;B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.</P>
              <P noPadding><strong>Wofür nutzen wir Ihre Daten?</strong></P>
              <P>Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.</P>
              <P noPadding><strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong></P>
              <P>Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.</P>
              <P>Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Details hierzu entnehmen Sie der Datenschutzerklärung unter &bdquo;Recht auf Einschränkung der Verarbeitung&ldquo;.</P>
              
              <H3>Analyse-Tools und Tools von Drittanbietern</H3>
              <P>Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit Cookies und mit sogenannten Analyseprogrammen. Die Analyse Ihres Surf-Verhaltens erfolgt in der Regel anonym; das Surf-Verhalten kann nicht zu Ihnen zurückverfolgt werden.</P>
              <P>Sie können dieser Analyse widersprechen oder sie durch die Nichtbenutzung bestimmter Tools verhindern. Detaillierte Informationen zu diesen Tools und über Ihre Widerspruchsmöglichkeiten finden Sie in der folgenden Datenschutzerklärung.</P>
              
              <H2>2. Hosting</H2>

              <H3>Externes Hosting</H3>
              <P>Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Webseitenzugriffe und sonstige Daten, die über eine Website generiert werden, handeln.</P>
              <P>Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).</P>
              <P>Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen.</P>
              <P noPadding><strong>Abschluss eines Vertrages über Auftragsverarbeitung</strong></P>
              <P>Um die datenschutzkonforme Verarbeitung zu gewährleisten, haben wir einen Vertrag über Auftragsverarbeitung mit unserem Hoster geschlossen.</P>
              
              <H2>3. Allgemeine Hinweise und Pflichtinformationen</H2>
              
              <H3>Datenschutz</H3>
              <P>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</P> <P>Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.</P> <P>Wir weisen darauf hin, dass die Datenübertragung im Internet (z.&nbsp;B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.</P>
              
              <H3>Hinweis zur verantwortlichen Stelle</H3>
              <P>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</P>
              <P>Nico Thiebes<br />Wilseder Ring 43<br />21079 Hamburg</P>
              <P>E-Mail: <Link href="mailto:privacy@booky.io">privacy@booky.io</Link></P>
              <P>Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.&nbsp;B. Namen, E-Mail-Adressen o. ä.) entscheidet.</P>
              
              <H3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</H3>
              <P>Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.</P>
              
              <H3>Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)</H3>
              <P>WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRüNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FüR EIN AUF DIESE BESTIMMUNGEN GESTüTZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKLäRUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR KöNNEN ZWINGENDE SCHUTZWüRDIGE GRüNDE FüR DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN üBERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSüBUNG ODER VERTEIDIGUNG VON RECHTSANSPRüCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).</P>
              <P>WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH FüR DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).</P>
              
              <H3>Beschwerderecht bei der zuständigen Aufsichtsbehörde</H3>
              <P>Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.</P>
              
              <H3>Recht auf Datenübertragbarkeit</H3>
              <P>Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.</P>
              
              <H3>SSL- bzw. TLS-Verschlüsselung</H3>
              <P>Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von &bdquo;http://&ldquo; auf &bdquo;https://&ldquo; wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.</P>
              <P>Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.</P>
              
              <H3>Auskunft, Löschung und Berichtigung</H3>
              <P>Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.</P>
              
              <H3>Recht auf Einschränkung der Verarbeitung</H3>
              <P>Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:</P>
              <ul>
                <li className="privacy-list__item">Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                <li className="privacy-list__item">Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.</li>
                <li className="privacy-list__item">Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li> 
                <li className="privacy-list__item">Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
              </ul>
              <br />
              <P>Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten - von ihrer Speicherung abgesehen - nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.</P>
              
              <H2>4. Datenerfassung auf dieser Website</H2>
              
              <H3>Cookies</H3>
              <P>Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert.</P>
              <P>Die meisten der von uns verwendeten Cookies sind so genannte &bdquo;Session-Cookies&ldquo;. Sie werden nach Ende Ihres Besuchs automatisch gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert bis Sie diese löschen. Diese Cookies ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.</P>
              <P>Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.</P>
              <P>Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs oder zur Bereitstellung bestimmter, von Ihnen erwünschter Funktionen (z.&nbsp;B. Warenkorbfunktion) erforderlich sind, werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert. Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von Cookies zur technisch fehlerfreien und optimierten Bereitstellung seiner Dienste. Sofern eine entsprechende Einwilligung abgefragt wurde (z. B. eine Einwilligung zur Speicherung von Cookies), erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar.</P> <P>Soweit andere Cookies (z.&nbsp;B. Cookies zur Analyse Ihres Surfverhaltens) gespeichert werden, werden diese in dieser Datenschutzerklärung gesondert behandelt.</P>
              
              <H3>Kontaktformular</H3>
              <P>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</P>
              <P>Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.</P>
              <P>Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z.&nbsp;B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen - insbesondere Aufbewahrungsfristen - bleiben unberührt.</P>
              
              <H3>Anfrage per E-Mail, Telefon oder Telefax</H3>
              <P>Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</P>
              <P>Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) und/oder auf unseren berechtigten Interessen (Art. 6 Abs. 1 lit. f DSGVO), da wir ein berechtigtes Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen haben.</P> <P>Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z.&nbsp;B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen - insbesondere gesetzliche Aufbewahrungsfristen - bleiben unberührt.</P>
              <P>Quelle: <Link target="_blank" href="https://www.e-recht24.de">https://www.e-recht24.de</Link></P>
            </Fragment>
          ) }
        </Section>
      </Page>
    );
  }
}

Privacy.propTypes = {
  locale: PropTypes.string.isRequired
};
