(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8ef0b7c0"],{"0bd1":function(e,t,o){"use strict";o("ee20")},"0fd9":function(e,t,o){"use strict";o("14d9"),o("13d5"),o("4b85");var a=o("2b0e"),r=o("d9f7"),i=o("80d2");const n=["sm","md","lg","xl"],s=["start","end","center"];function c(e,t){return n.reduce((o,a)=>(o[e+Object(i["s"])(a)]=t(),o),{})}const l=e=>[...s,"baseline","stretch"].includes(e),h=c("align",()=>({type:String,default:null,validator:l})),d=e=>[...s,"space-between","space-around"].includes(e),u=c("justify",()=>({type:String,default:null,validator:d})),p=e=>[...s,"space-between","space-around","stretch"].includes(e),f=c("alignContent",()=>({type:String,default:null,validator:p})),y={align:Object.keys(h),justify:Object.keys(u),alignContent:Object.keys(f)},v={align:"align",justify:"justify",alignContent:"align-content"};function m(e,t,o){let a=v[e];if(null!=o){if(t){const o=t.replace(e,"");a+="-"+o}return a+="-"+o,a.toLowerCase()}}const g=new Map;t["a"]=a["a"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:l},...h,justify:{type:String,default:null,validator:d},...u,alignContent:{type:String,default:null,validator:p},...f},render(e,{props:t,data:o,children:a}){let i="";for(const r in t)i+=String(t[r]);let n=g.get(i);if(!n){let e;for(e in n=[],y)y[e].forEach(o=>{const a=t[o],r=m(e,o,a);r&&n.push(r)});n.push({"no-gutters":t.noGutters,"row--dense":t.dense,["align-"+t.align]:t.align,["justify-"+t.justify]:t.justify,["align-content-"+t.alignContent]:t.alignContent}),g.set(i,n)}return e(t.tag,Object(r["a"])(o,{staticClass:"row",class:n}),a)}})},"198c":function(e,t,o){"use strict";o.r(t);var a=o("62ad"),r=o("a523"),i=o("0fd9"),n=function(){var e=this,t=e._self._c;return t(r["a"],[t(i["a"],[t(a["a"],{attrs:{cols:"12"}},[t("div",[t("h1",[e._v("Privacy Policy")]),t("h2",[e._v("1. An overview of data protection")]),t("h3",[e._v("General information")]),t("p",[e._v("The following information will provide you with an easy to navigate overview of what will happen with your personal data when you visit this website. The term “personal data” comprises all data that can be used to personally identify you. For detailed information about the subject matter of data protection, please consult our Data Protection Declaration, which we have included beneath this copy.")]),t("h3",[e._v("Data recording on this website")]),e._v(" "),t("h4",[e._v("Who is the responsible party for the recording of data on this website (i.e., the “controller”)?")]),t("p",[e._v("The data on this website is processed by the operator of the website, whose contact information is available under section “Information about the responsible party (referred to as the “controller” in the GDPR)” in this Privacy Policy.")]),e._v(" "),t("h4",[e._v("How do we record your data?")]),t("p",[e._v("We collect your data as a result of your sharing of your data with us. This may, for instance be information you enter into our contact form.")]),t("p",[e._v("Other data shall be recorded by our IT systems automatically or after you consent to its recording during your website visit. This data comprises primarily technical information (e.g., web browser, operating system, or time the site was accessed). This information is recorded automatically when you access this website.")]),e._v(" "),t("h4",[e._v(" What are the purposes we use your data for?")]),t("p",[e._v("A portion of the information is generated to guarantee the error free provision of the website. Other data may be used to analyze your user patterns.")]),e._v(" "),t("h4",[e._v("What rights do you have as far as your information is concerned?")]),t("p",[e._v("You have the right to receive information about the source, recipients, and purposes of your archived personal data at any time without having to pay a fee for such disclosures. You also have the right to demand that your data are rectified or eradicated. If you have consented to data processing, you have the option to revoke this consent at any time, which shall affect all future data processing. Moreover, you have the right to demand that the processing of your data be restricted under certain circumstances. Furthermore, you have the right to log a complaint with the competent supervising agency.")]),t("p",[e._v("Please do not hesitate to contact us at any time if you have questions about this or any other data protection related issues.")]),t("h3",[e._v("Analysis tools and tools provided by third parties")]),t("p",[e._v("There is a possibility that your browsing patterns will be statistically analyzed when your visit this website. Such analyses are performed primarily with what we refer to as analysis programs.")]),t("p",[e._v("For detailed information about these analysis programs please consult our Data Protection Declaration below.")]),t("h2",[e._v("2. Hosting and Content Delivery Networks (CDN)")]),t("p",[e._v("We are hosting the content of our website at the following providers:")]),t("h3",[e._v("All-Inkl")]),t("p",[e._v("The Provider is the ALL-INKL.COM – Neue Medien Münnich, owner: René Münnich, Hauptstraße 68, 02742 Friedersdorf, Germany (hereinafter “All-Inkl”). For details, please visit the privacy policy of All-Inkl: "),t("a",{attrs:{href:"https://all-inkl.com/datenschutzinformationen/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://all-inkl.com/datenschutzinformationen/")]),e._v(". ")]),t("p",[e._v("The use of All-Inkl is based on Art. 6(1)(f) GDPR. We have a legitimate interest in the most reliable representation of our website. If appropriate consent has been obtained, the processing is carried out exclusively on the basis of Art. 6(1)(a) GDPR and § 25 (1) TTDSG, insofar the consent includes the storage of cookies or the access to information in the user’s end device (e.g., device fingerprinting) within the meaning of the TTDSG. This consent can be revoked at any time.")]),t("h4",[e._v("Data processing")]),t("p",[e._v("We have concluded a data processing agreement (DPA) for the use of the above-mentioned service. This is a contract mandated by data privacy laws that guarantees that they process personal data of our website visitors only based on our instructions and in compliance with the GDPR.")]),t("h3",[e._v("Amazon Web Services (AWS)")]),t("p",[e._v("The provider is the Amazon Web Services EMEA SARL, 38 Avenue John F. Kennedy, 1855 Luxembourg (hereinafter referred to as “AWS”).")]),t("p",[e._v("When you visit our website, your personal data will be processed on AWS servers. This may also result in the transfer of personal data to the parent company of AWS in the United States. The transfer of data to the US is based on the EU’s standard contractual clauses. For details please consult: "),t("a",{attrs:{href:"https://aws.amazon.com/de/blogs/security/aws-gdpr-data-processing-addendum/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://aws.amazon.com/de/blogs/security/aws-gdpr-data-processing-addendum/")]),e._v(". ")]),t("p",[e._v("For more information, please see the AWS Data Privacy Policy: "),t("a",{attrs:{href:"https://aws.amazon.com/de/privacy/?nc1=f_pr",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://aws.amazon.com/de/privacy/?nc1=f_pr")]),e._v(". ")]),t("p",[e._v("AWS is used on the basis of Art. 6(1)(f) GDPR. We have a legitimate interest in a depiction of our website that is as reliable as possible. If appropriate consent has been obtained, the processing is carried out exclusively on the basis of Art. 6(1)(a) GDPR and § 25 (1) TTDSG, insofar the consent includes the storage of cookies or the access to information in the user’s end device (e.g., device fingerprinting) within the meaning of the TTDSG. This consent can be revoked at any time.")]),t("h4",[e._v("Data processing")]),t("p",[e._v("We have concluded a data processing agreement (DPA) for the use of the above-mentioned service. This is a contract mandated by data privacy laws that guarantees that they process personal data of our website visitors only based on our instructions and in compliance with the GDPR.")]),t("h2",[e._v("3. General information and mandatory information")]),t("h3",[e._v("Data protection")]),t("p",[e._v("The operators of this website and its pages take the protection of your personal data very seriously. Hence, we handle your personal data as confidential information and in compliance with the statutory data protection regulations and this Data Protection Declaration.")]),t("p",[e._v("Whenever you use this website, a variety of personal information will be collected. Personal data comprises data that can be used to personally identify you. This Data Protection Declaration explains which data we collect as well as the purposes we use this data for. It also explains how, and for which purpose the information is collected.")]),t("p",[e._v("We herewith advise you that the transmission of data via the Internet (i.e., through e-mail communications) may be prone to security gaps. It is not possible to completely protect data against third-party access.")]),t("h3",[e._v("Information about the responsible party (referred to as the “controller” in the GDPR)")]),t("p",[e._v("The data processing controller on this website is:")]),t("p",[e._v("DR Solutions UG (haftungsbeschränkt)"),t("br"),e._v(" Birkenweg 11"),t("br"),e._v(" 71159 Mötzingen")]),t("p",[e._v("E-Mail: dominikratzel16@gmail.com")]),t("p",[e._v("The controller is the natural person or legal entity that single-handedly or jointly with others makes decisions as to the purposes of and resources for the processing of personal data (e.g., names, e-mail addresses, etc.).")]),t("h3",[e._v("Storage duration")]),t("p",[e._v("Unless a more specific storage period has been specified in this privacy policy, your personal data will remain with us until the purpose for which it was collected no longer applies. If you assert a justified request for deletion or revoke your consent to data processing, your data will be deleted, unless we have other legally permissible reasons for storing your personal data (e.g., tax or commercial law retention periods); in the latter case, the deletion will take place after these reasons cease to apply.")]),t("h3",[e._v("General information on the legal basis for the data processing on this website")]),t("p",[e._v("If you have consented to data processing, we process your personal data on the basis of Art. 6(1)(a) GDPR or Art. 9 (2)(a) GDPR, if special categories of data are processed according to Art. 9 (1) DSGVO. In the case of explicit consent to the transfer of personal data to third countries, the data processing is also based on Art. 49 (1)(a) GDPR. If you have consented to the storage of cookies or to the access to information in your end device (e.g., via device fingerprinting), the data processing is additionally based on § 25 (1) TTDSG. The consent can be revoked at any time. If your data is required for the fulfillment of a contract or for the implementation of pre-contractual measures, we process your data on the basis of Art. 6(1)(b) GDPR. Furthermore, if your data is required for the fulfillment of a legal obligation, we process it on the basis of Art. 6(1)(c) GDPR. Furthermore, the data processing may be carried out on the basis of our legitimate interest according to Art. 6(1)(f) GDPR. Information on the relevant legal basis in each individual case is provided in the following paragraphs of this privacy policy.")]),t("h3",[e._v("Information on data transfer to the USA and other non-EU countries")]),t("p",[e._v("Among other things, we use tools of companies domiciled in the United States or other from a data protection perspective non-secure non-EU countries. If these tools are active, your personal data may potentially be transferred to these non-EU countries and may be processed there. We must point out that in these countries, a data protection level that is comparable to that in the EU cannot be guaranteed. For instance, U.S. enterprises are under a mandate to release personal data to the security agencies and you as the data subject do not have any litigation options to defend yourself in court. Hence, it cannot be ruled out that U.S. agencies (e.g., the Secret Service) may process, analyze, and permanently archive your personal data for surveillance purposes. We have no control over these processing activities.")]),t("h3",[e._v("Revocation of your consent to the processing of data")]),t("p",[e._v("A wide range of data processing transactions are possible only subject to your express consent. You can also revoke at any time any consent you have already given us. This shall be without prejudice to the lawfulness of any data collection that occurred prior to your revocation.")]),t("h3",[e._v("Right to object to the collection of data in special cases; right to object to direct advertising (Art. 21 GDPR)")]),t("p",[e._v("IN THE EVENT THAT DATA ARE PROCESSED ON THE BASIS OF ART. 6(1)(E) OR (F) GDPR, YOU HAVE THE RIGHT TO AT ANY TIME OBJECT TO THE PROCESSING OF YOUR PERSONAL DATA BASED ON GROUNDS ARISING FROM YOUR UNIQUE SITUATION. THIS ALSO APPLIES TO ANY PROFILING BASED ON THESE PROVISIONS. TO DETERMINE THE LEGAL BASIS, ON WHICH ANY PROCESSING OF DATA IS BASED, PLEASE CONSULT THIS DATA PROTECTION DECLARATION. IF YOU LOG AN OBJECTION, WE WILL NO LONGER PROCESS YOUR AFFECTED PERSONAL DATA, UNLESS WE ARE IN A POSITION TO PRESENT COMPELLING PROTECTION WORTHY GROUNDS FOR THE PROCESSING OF YOUR DATA, THAT OUTWEIGH YOUR INTERESTS, RIGHTS AND FREEDOMS OR IF THE PURPOSE OF THE PROCESSING IS THE CLAIMING, EXERCISING OR DEFENCE OF LEGAL ENTITLEMENTS (OBJECTION PURSUANT TO ART. 21(1) GDPR).")]),t("p",[e._v("IF YOUR PERSONAL DATA IS BEING PROCESSED IN ORDER TO ENGAGE IN DIRECT ADVERTISING, YOU HAVE THE RIGHT TO OBJECT TO THE PROCESSING OF YOUR AFFECTED PERSONAL DATA FOR THE PURPOSES OF SUCH ADVERTISING AT ANY TIME. THIS ALSO APPLIES TO PROFILING TO THE EXTENT THAT IT IS AFFILIATED WITH SUCH DIRECT ADVERTISING. IF YOU OBJECT, YOUR PERSONAL DATA WILL SUBSEQUENTLY NO LONGER BE USED FOR DIRECT ADVERTISING PURPOSES (OBJECTION PURSUANT TO ART. 21(2) GDPR).")]),t("h3",[e._v("Right to log a complaint with the competent supervisory agency")]),t("p",[e._v("In the event of violations of the GDPR, data subjects are entitled to log a complaint with a supervisory agency, in particular in the member state where they usually maintain their domicile, place of work or at the place where the alleged violation occurred. The right to log a complaint is in effect regardless of any other administrative or court proceedings available as legal recourses.")]),t("h3",[e._v("Right to data portability")]),t("p",[e._v("You have the right to have data that we process automatically on the basis of your consent or in fulfillment of a contract handed over to you or to a third party in a common, machine-readable format. If you should demand the direct transfer of the data to another controller, this will be done only if it is technically feasible.")]),t("h3",[e._v("Information about, rectification and eradication of data")]),t("p",[e._v("Within the scope of the applicable statutory provisions, you have the right to demand information about your archived personal data, their source and recipients as well as the purpose of the processing of your data at any time. You may also have a right to have your data rectified or eradicated. If you have questions about this subject matter or any other questions about personal data, please do not hesitate to contact us at any time.")]),t("h3",[e._v("Right to demand processing restrictions")]),t("p",[e._v("You have the right to demand the imposition of restrictions as far as the processing of your personal data is concerned. To do so, you may contact us at any time. The right to demand restriction of processing applies in the following cases:")]),t("ul",[t("li",[e._v("In the event that you should dispute the correctness of your data archived by us, we will usually need some time to verify this claim. During the time that this investigation is ongoing, you have the right to demand that we restrict the processing of your personal data. ")]),t("li",[e._v("If the processing of your personal data was/is conducted in an unlawful manner, you have the option to demand the restriction of the processing of your data instead of demanding the eradication of this data. ")]),t("li",[e._v("If we do not need your personal data any longer and you need it to exercise, defend or claim legal entitlements, you have the right to demand the restriction of the processing of your personal data instead of its eradication. ")]),t("li",[e._v("If you have raised an objection pursuant to Art. 21(1) GDPR, your rights and our rights will have to be weighed against each other. As long as it has not been determined whose interests prevail, you have the right to demand a restriction of the processing of your personal data. ")])]),t("p",[e._v("If you have restricted the processing of your personal data, these data – with the exception of their archiving – may be processed only subject to your consent or to claim, exercise or defend legal entitlements or to protect the rights of other natural persons or legal entities or for important public interest reasons cited by the European Union or a member state of the EU.")]),t("h3",[e._v("SSL and/or TLS encryption")]),t("p",[e._v("For security reasons and to protect the transmission of confidential content, such as purchase orders or inquiries you submit to us as the website operator, this website uses either an SSL or a TLS encryption program. You can recognize an encrypted connection by checking whether the address line of the browser switches from “http://” to “https://” and also by the appearance of the lock icon in the browser line.")]),t("p",[e._v("If the SSL or TLS encryption is activated, data you transmit to us cannot be read by third parties.")]),t("h3",[e._v("Encrypted payment transactions on this website")]),t("p",[e._v("If you are under an obligation to share your payment information (e.g. account number if you give us the authority to debit your bank account) with us after you have entered into a fee-based contract with us, this information is required to process payments.")]),t("p",[e._v("Payment transactions using common modes of paying (Visa/MasterCard, debit to your bank account) are processed exclusively via encrypted SSL or TLS connections. You can recognize an encrypted connection by checking whether the address line of the browser switches from “http://” to “https://” and also by the appearance of the lock icon in the browser line.")]),t("p",[e._v("If the communication with us is encrypted, third parties will not be able to read the payment information you share with us.")]),t("h2",[e._v("4. Recording of data on this website")]),t("h3",[e._v("Cookies")]),t("p",[e._v("Our websites and pages use what the industry refers to as “cookies.” Cookies are small data packages that do not cause any damage to your device. They are either stored temporarily for the duration of a session (session cookies) or they are permanently archived on your device (permanent cookies). Session cookies are automatically deleted once you terminate your visit. Permanent cookies remain archived on your device until you actively delete them, or they are automatically eradicated by your web browser.")]),t("p",[e._v("Cookies can be issued by us (first-party cookies) or by third-party companies (so-called third-party cookies). Third-party cookies enable the integration of certain services of third-party companies into websites (e.g., cookies for handling payment services).")]),t("p",[e._v("Cookies have a variety of functions. Many cookies are technically essential since certain website functions would not work in the absence of these cookies (e.g., the shopping cart function or the display of videos). Other cookies may be used to analyze user behavior or for promotional purposes.")]),t("p",[e._v("Cookies, which are required for the performance of electronic communication transactions, for the provision of certain functions you want to use (e.g., for the shopping cart function) or those that are necessary for the optimization (required cookies) of the website (e.g., cookies that provide measurable insights into the web audience), shall be stored on the basis of Art. 6(1)(f) GDPR, unless a different legal basis is cited. The operator of the website has a legitimate interest in the storage of required cookies to ensure the technically error-free and optimized provision of the operator’s services. If your consent to the storage of the cookies and similar recognition technologies has been requested, the processing occurs exclusively on the basis of the consent obtained (Art. 6(1)(a) GDPR and § 25 (1) TTDSG); this consent may be revoked at any time.")]),t("p",[e._v("You have the option to set up your browser in such a manner that you will be notified any time cookies are placed and to permit the acceptance of cookies only in specific cases. You may also exclude the acceptance of cookies in certain cases or in general or activate the delete-function for the automatic eradication of cookies when the browser closes. If cookies are deactivated, the functions of this website may be limited.")]),t("p",[e._v("Which cookies and services are used on this website can be found in this privacy policy.")]),t("h3",{attrs:{id:"contact"}},[e._v("Contact form")]),t("p",[e._v("If you submit inquiries to us via our contact form, the information provided in the contact form as well as any contact information provided therein will be stored by us in order to handle your inquiry and in the event that we have further questions. We will not share this information without your consent.")]),t("p",[e._v("The processing of these data is based on Art. 6(1)(b) GDPR, if your request is related to the execution of a contract or if it is necessary to carry out pre-contractual measures. In all other cases the processing is based on our legitimate interest in the effective processing of the requests addressed to us (Art. 6(1)(f) GDPR) or on your agreement (Art. 6(1)(a) GDPR) if this has been requested; the consent can be revoked at any time.")]),t("p",[e._v("The information you have entered into the contact form shall remain with us until you ask us to eradicate the data, revoke your consent to the archiving of data or if the purpose for which the information is being archived no longer exists (e.g., after we have concluded our response to your inquiry). This shall be without prejudice to any mandatory legal provisions, in particular retention periods.")]),t("h3",[e._v("Request by e-mail, telephone, or fax")]),t("p",[e._v("If you contact us by e-mail, telephone or fax, your request, including all resulting personal data (name, request) will be stored and processed by us for the purpose of processing your request. We do not pass these data on without your consent.")]),t("p",[e._v("These data are processed on the basis of Art. 6(1)(b) GDPR if your inquiry is related to the fulfillment of a contract or is required for the performance of pre-contractual measures. In all other cases, the data are processed on the basis of our legitimate interest in the effective handling of inquiries submitted to us (Art. 6(1)(f) GDPR) or on the basis of your consent (Art. 6(1)(a) GDPR) if it has been obtained; the consent can be revoked at any time.")]),t("p",[e._v("The data sent by you to us via contact requests remain with us until you request us to delete, revoke your consent to the storage or the purpose for the data storage lapses (e.g. after completion of your request). Mandatory statutory provisions - in particular statutory retention periods - remain unaffected.")]),t("h3",[e._v("Registration on this website")]),t("p",[e._v("You have the option to register on this website to be able to use additional website functions. We shall use the data you enter only for the purpose of using the respective offer or service you have registered for. The required information we request at the time of registration must be entered in full. Otherwise, we shall reject the registration.")]),t("p",[e._v("To notify you of any important changes to the scope of our portfolio or in the event of technical modifications, we shall use the e-mail address provided during the registration process.")]),t("p",[e._v("We shall process the data entered during the registration process on the basis of your consent (Art. 6(1)(a) GDPR).")]),t("p",[e._v("The data recorded during the registration process shall be stored by us as long as you are registered on this website. Subsequently, such data shall be deleted. This shall be without prejudice to mandatory statutory retention obligations.")]),t("h4",[e._v("Hosting")]),t("p",[e._v("We host Matomo exclusively on our own servers so that all analysis data remains with us and is not passed on.")]),t("h2",[e._v("6. Plug-ins and Tools")]),t("h3",[e._v("YouTube with expanded data protection integration")]),t("p",[e._v("Our website embeds videos of the website YouTube. The website operator is Google Ireland Limited (“Google”), Gordon House, Barrow Street, Dublin 4, Ireland.")]),t("p",[e._v("We use YouTube in the expanded data protection mode. According to YouTube, this mode ensures that YouTube does not store any information about visitors to this website before they watch the video. Nevertheless, this does not necessarily mean that the sharing of data with YouTube partners can be ruled out as a result of the expanded data protection mode. For instance, regardless of whether you are watching a video, YouTube will always establish a connection with the Google DoubleClick network.")]),t("p",[e._v("As soon as you start to play a YouTube video on this website, a connection to YouTube’s servers will be established. As a result, the YouTube server will be notified, which of our pages you have visited. If you are logged into your YouTube account while you visit our site, you enable YouTube to directly allocate your browsing patterns to your personal profile. You have the option to prevent this by logging out of your YouTube account.")]),t("p",[e._v("Furthermore, after you have started to play a video, YouTube will be able to place various cookies on your device or comparable technologies for recognition (e.g. device fingerprinting). In this way YouTube will be able to obtain information about this website’s visitors. Among other things, this information will be used to generate video statistics with the aim of improving the user friendliness of the site and to prevent attempts to commit fraud.")]),t("p",[e._v("Under certain circumstances, additional data processing transactions may be triggered after you have started to play a YouTube video, which are beyond our control.")]),t("p",[e._v("The use of YouTube is based on our interest in presenting our online content in an appealing manner. Pursuant to Art. 6(1)(f) GDPR, this is a legitimate interest. If appropriate consent has been obtained, the processing is carried out exclusively on the basis of Art. 6(1)(a) GDPR and § 25 (1) TTDSG, insofar the consent includes the storage of cookies or the access to information in the user’s end device (e.g., device fingerprinting) within the meaning of the TTDSG. This consent can be revoked at any time.")]),t("p",[e._v("For more information on how YouTube handles user data, please consult the YouTube Data Privacy Policy under: "),t("a",{attrs:{href:"https://policies.google.com/privacy?hl=en",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://policies.google.com/privacy?hl=en")]),e._v(". ")]),t("h3",[e._v("Google Fonts (local embedding)")]),t("p",[e._v("This website uses so-called Google Fonts provided by Google to ensure the uniform use of fonts on this site. These Google fonts are locally installed so that a connection to Google’s servers will not be established in conjunction with this application.")]),t("p",[e._v("For more information on Google Fonts, please follow this link: "),t("a",{attrs:{href:"https://developers.google.com/fonts/faq",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://developers.google.com/fonts/faq")]),e._v(" and consult Google’s Data Privacy Declaration under: "),t("a",{attrs:{href:"https://policies.google.com/privacy?hl=en",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://policies.google.com/privacy?hl=en")]),e._v(". ")]),t("h3",[e._v("Font Awesome (local embedding)")]),t("p",[e._v("This website uses Font Awesome to ensure the uniform use of fonts on this site. Font Awesome is locally installed so that a connection to Fonticons, Inc.’s servers will not be established in conjunction with this application.")]),t("p",[e._v("For more information on Font Awesome, please and consult the Data Privacy Declaration for Font Awesome under: "),t("a",{attrs:{href:"https://fontawesome.com/privacy",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://fontawesome.com/privacy")]),e._v(".")]),t("h2",[e._v("7. eCommerce and payment service providers")]),t("h3",[e._v("Processing of Customer and Contract Data")]),t("p",[e._v("We collect, process, and use personal customer and contract data for the establishment, content arrangement and modification of our contractual relationships. Data with personal references to the use of this website (usage data) will be collected, processed, and used only if this is necessary to enable the user to use our services or required for billing purposes. The legal basis for these processes is Art. 6(1)(b) GDPR.")]),t("p",[e._v("The collected customer data shall be deleted upon completion of the order or termination of the business relationship and upon expiration of any existing statutory archiving periods. This shall be without prejudice to any statutory archiving periods.")]),t("h3",[e._v("Payment services")]),t("p",[e._v("We integrate payment services of third-party companies on our website. When you make a purchase from us, your payment data (e.g. name, payment amount, bank account details, credit card number) are processed by the payment service provider for the purpose of payment processing. For these transactions, the respective contractual and data protection provisions of the respective providers apply. The use of the payment service providers is based on Art. 6(1)(b) GDPR (contract processing) and in the interest of a smooth, convenient, and secure payment transaction (Art. 6(1)(f) GDPR). Insofar as your consent is requested for certain actions, Art. 6(1)(a) GDPR is the legal basis for data processing; consent may be revoked at any time for the future.")]),t("p",[e._v("We use the following payment services / payment service providers within the scope of this website:")]),t("h4",[e._v("Stripe")]),t("p",[e._v("The provider for customers within the EU is Stripe Payments Europe, Ltd,1 Grand Canal Street Lower, Grand Canal Dock, Dublin, Ireland (hereinafter “Stripe”).")]),t("p",[e._v("Data transmission to the US is based on the Standard Contractual Clauses (SCC) of the European Commission. Details can be found here: "),t("a",{attrs:{href:"https://stripe.com/de/privacy",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://stripe.com/de/privacy")]),e._v(" and "),t("a",{attrs:{href:"https://stripe.com/de/guides/general-data-protection-regulation",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://stripe.com/de/guides/general-data-protection-regulation")]),e._v(".")]),t("p",[e._v("Details can be found in Stripe’s Privacy Policy at the following link: "),t("a",{attrs:{href:"https://stripe.com/de/privacy",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://stripe.com/de/privacy")]),e._v(". ")])])])],1)],1)},s=[],c={name:"Privacy"},l=c,h=(o("0bd1"),o("2877")),d=Object(h["a"])(l,n,s,!1,null,"58e666c5",null);t["default"]=d.exports},"4b85":function(e,t,o){},"62ad":function(e,t,o){"use strict";o("14d9"),o("13d5"),o("4b85");var a=o("2b0e"),r=o("d9f7"),i=o("80d2");const n=["sm","md","lg","xl"],s=(()=>n.reduce((e,t)=>(e[t]={type:[Boolean,String,Number],default:!1},e),{}))(),c=(()=>n.reduce((e,t)=>(e["offset"+Object(i["s"])(t)]={type:[String,Number],default:null},e),{}))(),l=(()=>n.reduce((e,t)=>(e["order"+Object(i["s"])(t)]={type:[String,Number],default:null},e),{}))(),h={col:Object.keys(s),offset:Object.keys(c),order:Object.keys(l)};function d(e,t,o){let a=e;if(null!=o&&!1!==o){if(t){const o=t.replace(e,"");a+="-"+o}return"col"!==e||""!==o&&!0!==o?(a+="-"+o,a.toLowerCase()):a.toLowerCase()}}const u=new Map;t["a"]=a["a"].extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...s,offset:{type:[String,Number],default:null},...c,order:{type:[String,Number],default:null},...l,alignSelf:{type:String,default:null,validator:e=>["auto","start","end","center","baseline","stretch"].includes(e)},tag:{type:String,default:"div"}},render(e,{props:t,data:o,children:a,parent:i}){let n="";for(const r in t)n+=String(t[r]);let s=u.get(n);if(!s){let e;for(e in s=[],h)h[e].forEach(o=>{const a=t[o],r=d(e,o,a);r&&s.push(r)});const o=s.some(e=>e.startsWith("col-"));s.push({col:!o||!t.cols,["col-"+t.cols]:t.cols,["offset-"+t.offset]:t.offset,["order-"+t.order]:t.order,["align-self-"+t.alignSelf]:t.alignSelf}),u.set(n,s)}return e(t.tag,Object(r["a"])(o,{class:s}),a)}})},a523:function(e,t,o){"use strict";o("20f6"),o("4b85");var a=o("2b0e");function r(e){return a["a"].extend({name:"v-"+e,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(t,{props:o,data:a,children:r}){a.staticClass=`${e} ${a.staticClass||""}`.trim();const{attrs:i}=a;if(i){a.attrs={};const e=Object.keys(i).filter(e=>{if("slot"===e)return!1;const t=i[e];return e.startsWith("data-")?(a.attrs[e]=t,!1):t||"string"===typeof t});e.length&&(a.staticClass+=" "+e.join(" "))}return o.id&&(a.domProps=a.domProps||{},a.domProps.id=o.id),t(o.tag,a,r)}})}var i=o("d9f7");t["a"]=r("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(e,{props:t,data:o,children:a}){let r;const{attrs:n}=o;return n&&(o.attrs={},r=Object.keys(n).filter(e=>{if("slot"===e)return!1;const t=n[e];return e.startsWith("data-")?(o.attrs[e]=t,!1):t||"string"===typeof t})),t.id&&(o.domProps=o.domProps||{},o.domProps.id=t.id),e(t.tag,Object(i["a"])(o,{staticClass:"container",class:Array({"container--fluid":t.fluid}).concat(r||[])}),a)}})},ee20:function(e,t,o){}}]);
//# sourceMappingURL=chunk-8ef0b7c0.be902778.js.map