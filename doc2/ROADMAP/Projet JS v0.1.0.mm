<map version="freeplane 1.3.0">
<!--To view this file, download free mind mapping software Freeplane from http://freeplane.sourceforge.net -->
<node TEXT="Projet JS" ID="ID_1723255651" CREATED="1283093380553" MODIFIED="1527513993304"><hook NAME="MapStyle" layout="OUTLINE">
    <properties show_note_icons="true"/>

<map_styles>
<stylenode LOCALIZED_TEXT="styles.root_node">
<stylenode LOCALIZED_TEXT="styles.predefined" POSITION="right">
<stylenode LOCALIZED_TEXT="default" MAX_WIDTH="600" COLOR="#000000" STYLE="as_parent">
<font NAME="SansSerif" SIZE="10" BOLD="false" ITALIC="false"/>
</stylenode>
<stylenode LOCALIZED_TEXT="defaultstyle.details"/>
<stylenode LOCALIZED_TEXT="defaultstyle.note"/>
<stylenode LOCALIZED_TEXT="defaultstyle.floating">
<edge STYLE="hide_edge"/>
<cloud COLOR="#f0f0f0" SHAPE="ROUND_RECT"/>
</stylenode>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.user-defined" POSITION="right">
<stylenode LOCALIZED_TEXT="styles.topic" COLOR="#18898b" STYLE="fork">
<font NAME="Liberation Sans" SIZE="10" BOLD="true"/>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.subtopic" COLOR="#cc3300" STYLE="fork">
<font NAME="Liberation Sans" SIZE="10" BOLD="true"/>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.subsubtopic" COLOR="#669900">
<font NAME="Liberation Sans" SIZE="10" BOLD="true"/>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.important">
<icon BUILTIN="yes"/>
</stylenode>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.AutomaticLayout" POSITION="right">
<stylenode LOCALIZED_TEXT="AutomaticLayout.level.root" COLOR="#000000">
<font SIZE="18"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,1" COLOR="#0033ff">
<font SIZE="16"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,2" COLOR="#00b439">
<font SIZE="14"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,3" COLOR="#990000">
<font SIZE="12"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,4" COLOR="#111111">
<font SIZE="10"/>
</stylenode>
</stylenode>
</stylenode>
</map_styles>
</hook>
<hook NAME="AutomaticEdgeColor" COUNTER="10"/>
<hook NAME="accessories/plugins/AutomaticLayout.properties" VALUE="ALL"/>
<node TEXT="USE CASES" POSITION="left" ID="ID_73015132" CREATED="1527583776395" MODIFIED="1527583784936">
<edge COLOR="#ffff00"/>
<node TEXT="Generer nouvelle partie" ID="ID_470466859" CREATED="1527583799913" MODIFIED="1527583811322"/>
<node TEXT="Annuler dernier mouvement" ID="ID_363151324" CREATED="1527583811696" MODIFIED="1527583819411"/>
<node TEXT="Alertes visuelles" ID="ID_1756801791" CREATED="1527583820417" MODIFIED="1527583839345">
<node TEXT="Nouveau record" ID="ID_103928946" CREATED="1527583839351" MODIFIED="1527583844864"/>
<node TEXT="Fin de partie" ID="ID_1721265835" CREATED="1527583845264" MODIFIED="1527583848481">
<node TEXT="Perdu" ID="ID_1207260047" CREATED="1527583849840" MODIFIED="1527583851872"/>
<node TEXT="Gagn&#xe9;" ID="ID_144324834" CREATED="1527583852256" MODIFIED="1527583854048"/>
</node>
</node>
</node>
<node TEXT="OPTION" POSITION="left" ID="ID_982790894" CREATED="1527583785361" MODIFIED="1527583788482">
<edge COLOR="#7c0000"/>
<node TEXT="Continuer apr&#xe8;s 2048" ID="ID_1304260070" CREATED="1527583791762" MODIFIED="1527583798131"/>
<node TEXT="Mouvement par clic sourie" ID="ID_511268809" CREATED="1527583903919" MODIFIED="1527583916424"/>
<node TEXT="Choix taille grille" ID="ID_417872086" CREATED="1527584515868" MODIFIED="1527584521515"/>
</node>
<node TEXT="G&#xe9;n&#xe9;rer page" POSITION="right" ID="ID_546841158" CREATED="1527583866834" MODIFIED="1527583874129">
<edge COLOR="#00007c"/>
<node TEXT="Header" ID="ID_597527774" CREATED="1527583885977" MODIFIED="1527583889207">
<node TEXT="Nouvelle partie" ID="ID_886898635" CREATED="1527583919495" MODIFIED="1527583926839"/>
<node TEXT="Compteur (actuel)" ID="ID_1743780326" CREATED="1527583927102" MODIFIED="1527583934911"/>
<node TEXT="Record" ID="ID_15749606" CREATED="1527583935214" MODIFIED="1527583936726"/>
<node TEXT="Annuler" ID="ID_536791946" CREATED="1527583937022" MODIFIED="1527583940150"/>
</node>
<node TEXT="Main" ID="ID_399121422" CREATED="1527583881583" MODIFIED="1527583981189">
<node TEXT="Grille" ID="ID_1665250317" CREATED="1527583895551" MODIFIED="1527583897447"/>
</node>
<node TEXT="Footer" ID="ID_1213809260" CREATED="1527583889593" MODIFIED="1527583891643">
<node TEXT="Lien GitHub" ID="ID_1047756042" CREATED="1527583942598" MODIFIED="1527583948502"/>
<node TEXT="Cr&#xe9;dit" ID="ID_1026120616" CREATED="1527583948790" MODIFIED="1527583951262"/>
<node TEXT="Num&#xe9;ro de version" ID="ID_186357433" CREATED="1527583951624" MODIFIED="1527583956589"/>
</node>
</node>
<node TEXT="Grille" POSITION="right" ID="ID_930638060" CREATED="1527583961936" MODIFIED="1527583967653">
<edge COLOR="#7c007c"/>
<node TEXT="G&#xe9;n&#xe9;rateur new case" ID="ID_898673243" CREATED="1527584091059" MODIFIED="1527584119618">
<node TEXT="Tirer al&#xe9;atoirement une case vide" ID="ID_772360036" CREATED="1527584137578" MODIFIED="1527584148354"/>
<node TEXT="Changer sa &quot;valeur&quot; en 2 (et dc classe etc)" ID="ID_193424807" CREATED="1527584148610" MODIFIED="1527584164677"/>
</node>
<node TEXT="Initialisation" ID="ID_755973020" CREATED="1527583984277" MODIFIED="1527583993981">
<node TEXT="Vider grille" ID="ID_1970259763" CREATED="1527583997525" MODIFIED="1527584001748"/>
<node TEXT="Get premi&#xe8;re valeure" ID="ID_1450027991" CREATED="1527584003749" MODIFIED="1527585226576">
<arrowlink SHAPE="CUBIC_CURVE" COLOR="#000000" WIDTH="2" TRANSPARENCY="80" FONT_SIZE="9" FONT_FAMILY="SansSerif" DESTINATION="ID_898673243" STARTARROW="NONE" ENDARROW="DEFAULT"/>
</node>
</node>
<node TEXT="A l&apos;input" ID="ID_714997477" CREATED="1527584196457" MODIFIED="1527584198881">
<node TEXT="Mettre en tampon la grille" ID="ID_95225730" CREATED="1527584202555" MODIFIED="1527584215554"/>
<node TEXT="Call la fonction de push" ID="ID_896022897" CREATED="1527583994244" MODIFIED="1527584194761">
<node TEXT="Push vers la gauche" ID="ID_1249585858" CREATED="1527584056932" MODIFIED="1527584072283">
<node TEXT="Boucle traitant les arrays (ds le bon ordre) par fonction" ID="ID_1601256036" CREATED="1527584376832" MODIFIED="1527584421936"/>
<node TEXT="Pour chaque tuples de arrays (colonnes ou ligne)" ID="ID_492158440" CREATED="1527584843421" MODIFIED="1527585204132">
<arrowlink SHAPE="CUBIC_CURVE" COLOR="#000000" WIDTH="2" TRANSPARENCY="80" FONT_SIZE="9" FONT_FAMILY="SansSerif" DESTINATION="ID_1604999692" STARTARROW="NONE" ENDARROW="DEFAULT"/>
</node>
</node>
<node TEXT="Push vers la droite" ID="ID_220993804" CREATED="1527584072565" MODIFIED="1527584076747"/>
<node TEXT="Push vers le haut" ID="ID_1975614822" CREATED="1527584077045" MODIFIED="1527584082148"/>
<node TEXT="Push vers le bas" ID="ID_746627612" CREATED="1527584082548" MODIFIED="1527584086691"/>
</node>
<node TEXT="Calcul new grille" ID="ID_1369696905" CREATED="1527584923341" MODIFIED="1527584930524">
<node TEXT="Push array (array1, array2)" ID="ID_1604999692" CREATED="1527584362329" MODIFIED="1527584574993">
<node TEXT="Pour i de 0 &#xe0; {longeur array}" ID="ID_1550151025" CREATED="1527584495876" MODIFIED="1527584538659">
<node TEXT="Si array1[i] est une case vide" ID="ID_48442737" CREATED="1527584541324" MODIFIED="1527584586529">
<node TEXT="Array1[i] = Array2[i]" ID="ID_109304137" CREATED="1527584634410" MODIFIED="1527584654337"/>
<node TEXT="Array2[i] devient vide" ID="ID_972861887" CREATED="1527584604370" MODIFIED="1527584633601"/>
</node>
<node TEXT="Si array1[i] = array2[i]" ID="ID_419606702" CREATED="1527584661801" MODIFIED="1527584697697">
<node TEXT="Array1[i] = Array2[i]*2" ID="ID_1249467414" CREATED="1527584634410" MODIFIED="1527584728945"/>
<node TEXT="Array2[i] devient vide" ID="ID_1913033031" CREATED="1527584604370" MODIFIED="1527584633601"/>
<node TEXT="On incr&#xe9;mente le compteur" ID="ID_831351788" CREATED="1527585253144" MODIFIED="1527585261191">
<arrowlink SHAPE="CUBIC_CURVE" COLOR="#000000" WIDTH="2" TRANSPARENCY="80" FONT_SIZE="9" FONT_FAMILY="SansSerif" DESTINATION="ID_1620086510" STARTARROW="NONE" ENDARROW="DEFAULT"/>
</node>
</node>
<node TEXT="Si array1[i] != 0 &amp; !=array2[i]" ID="ID_938853255" CREATED="1527584733400" MODIFIED="1527584752928">
<node TEXT="Breack (on passe au prochain i ou sort de la boucle" ID="ID_818882086" CREATED="1527584756448" MODIFIED="1527584774791"/>
</node>
</node>
</node>
</node>
<node TEXT="Incr&#xe9;menter compteur" ID="ID_1620086510" CREATED="1527584309505" MODIFIED="1527584319138"/>
<node TEXT="Affichage" ID="ID_1718810681" CREATED="1527584321271" MODIFIED="1527584328246">
<node TEXT="Nouvel &#xe9;tat de la grille" ID="ID_1086448115" CREATED="1527584332113" MODIFIED="1527584339750"/>
<node TEXT="Perdu" ID="ID_1250810451" CREATED="1527584340170" MODIFIED="1527584344150"/>
<node TEXT="Gagner" ID="ID_228879574" CREATED="1527584344649" MODIFIED="1527584346357"/>
</node>
</node>
<node TEXT="OBJECTS_GRILLE" ID="ID_855604561" CREATED="1527595306829" MODIFIED="1527595319461">
<node TEXT="Constructeur" ID="ID_17448707" CREATED="1527595219840" MODIFIED="1527595225668">
<node TEXT="State" ID="ID_408322360" CREATED="1527595269789" MODIFIED="1527595271885">
<node TEXT="cases_vides =(liste)" ID="ID_1181631745" CREATED="1527595274701" MODIFIED="1527595394810"/>
<node TEXT="cases = {}" ID="ID_512096891" CREATED="1527595395642" MODIFIED="1527595742308">
<node TEXT="c1 = {" ID="ID_1161254754" CREATED="1527595744262" MODIFIED="1527595761018"/>
</node>
</node>
</node>
<node TEXT="Methode" ID="ID_1974249210" CREATED="1527595226054" MODIFIED="1527595228414">
<node TEXT="Initialiser" ID="ID_536877607" CREATED="1527595231518" MODIFIED="1527595234671"/>
<node TEXT="sauvegarder_state" ID="ID_1915312305" CREATED="1527595447379" MODIFIED="1527595461282"/>
<node TEXT="Push_droite" ID="ID_6248555" CREATED="1527595234917" MODIFIED="1527595237942"/>
<node TEXT="Push_gauche" ID="ID_1978763387" CREATED="1527595238879" MODIFIED="1527595242791"/>
<node TEXT="Push_bas" ID="ID_1933076835" CREATED="1527595243042" MODIFIED="1527595247054"/>
<node TEXT="Push_haut" ID="ID_1364909482" CREATED="1527595247398" MODIFIED="1527595251268"/>
<node TEXT="Lister_vides" ID="ID_945025182" CREATED="1527595279901" MODIFIED="1527595292589"/>
</node>
</node>
</node>
</node>
</map>