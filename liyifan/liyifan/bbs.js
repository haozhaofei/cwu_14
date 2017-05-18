//�ȴ���һ���յ�bbs.js�ļ������޸�������Ϊutf-8�����ܱ������ġ� 
var xmlHttp;                        //���ڱ���XMLHttpRequest�����ȫ�ֱ��� 
var username;                       //���ڱ������� 
var title;                          //���ڱ������ 
var content;                        //���ڱ������� 
var threadid;                       //���ڱ��������� 
 
//���ڴ���XMLHttpRequest���� 
function createXmlHttp() { 
    //����window.XMLHttpRequest�����Ƿ����ʹ�ò�ͬ�Ĵ�����ʽ 
    if (window.XMLHttpRequest) { 
       xmlHttp = new XMLHttpRequest();                  //FireFox��Opera�������֧�ֵĴ�����ʽ 
    } else { 
       xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");//IE�����֧�ֵĴ�����ʽ 
    } 
} 
 
//�ύ������������ 
function submitPost() { 
    //��ȡ���������������⡢���ݡ��������Ĳ�����Ϣ 
    username = document.getElementById("username").value; 
    title = document.getElementById("post_title").value; 
    content = document.getElementById("post_content").value; 
    threadid = document.getElementById("threadid").value; 
    if (checkForm()) { 
        createXmlHttp();                                    //����XMLHttpRequest���� 
        xmlHttp.onreadystatechange = submitPostCallBack;    //���ûص����� 
        xmlHttp.open("POST", "bbspost.php", true);         //����POST���� 
        //����POST���������� 
        xmlHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded"); 
        xmlHttp.send("username=" + encodeURI(username) + 
                     "&title=" + encodeURI(title) + 
                     "&content=" + encodeURI(content) + 
                     "&threadid=" + threadid);              //���Ͱ����ĸ������������� 
    } 
} 
 
//�����Ƿ���������д��� 
function checkForm() { 
    if (username == "") { 
        alert("����д����"); 
        return false; 
    } else if (title == "") { 
        alert("����д����"); 
        return false; 
    } else if (content == "") { 
        alert("����д����"); 
        return false; 
    } 
    return true; 
} 
 
//��ȡ��ѯѡ��Ļص����� 
function submitPostCallBack() { 
    if (xmlHttp.readyState == 4) { 
        createNewPost(xmlHttp.responseText); 
    } 
} 
 
//�����µĻ��� 
function createNewPost(postId) { 
    //��յ�ǰ���и�������Ϣ 
    document.getElementById("post_title").value = ""; 
    document.getElementById("post_content").value = ""; 
    document.getElementById("username").value = ""; 
 
    var postDiv = createDiv("post", "");    //�������������div 
    postDiv.id = "post" + postId;           //����div��idֵ 
 
    var postTitleDiv = createDiv("post_title", title + " [" + username + "]");  //��������div 
    var postContentDiv = createDiv("post_content", "<pre>" + content + "</pre>");    //��������div 
    postDiv.appendChild(postTitleDiv);                          //�����div׷�ӱ��� 
    postDiv.appendChild(postContentDiv);                        //�����div׷������ 
 
    document.getElementById("thread").appendChild(postDiv);     //�����div׷�ӵ�����div�� 
} 
 
//����className��text�����µ�div 
function createDiv(className, text) { 
    var newDiv = document.createElement("div"); 
    newDiv.className = className; 
    newDiv.innerHTML = text; 
    return newDiv; 
} 