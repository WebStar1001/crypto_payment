/*INITIALIZING MAIN VARIABLES :: STARTS*/
let cmbElementTabs = {
    container : 'Container',
    component : 'Component',
    header : 'Header',
    media : 'Media',
    'pre-build-template' : 'Pre-build Template',
    'dynamic-layout' : 'Dynamic Layout',
};
let cmbWorkOnProcess = true;
let cmbPreviewActivated = true;
let cmbGlobalActivity = false;
let cmbMoveActivity = false;
let cmbWysiwygRunning = false;
let cmbSavingOnProcess = false;
let cmbStyleData = '';

let cmbCountedExistingElements = 1;
let cmbNonExistingIdArray = [];

let cmbWysiwygEditorDefaultHeight = 300;

let cmbOptionBox = {
    'cmb-option-prev' : {title : 'previous',text : '<i class="fa fa-caret-left"></i>'},
    'cmb-option-next' : {title : 'next',text : '<i class="fa fa-caret-right"></i>'},
    'cmb-option-move' : {title : 'move',text : '<i class="cm cm-move-default"></i>'},
    'cmb-option-settings' : {title : 'settings',text : '<i class="fa fa-gear"></i>'},
    'cmb-option-copy' : {title : 'copy',text : '<i class="fa fa-clone"></i>'},
    'cmb-option-delete' : {title : 'trash',text : '<i class="fa fa-trash"></i>'},
    'cmb-option-add' : {title : 'add',text : '<i class="fa fa-plus"></i>'},
}

let cmbOptionBoxElements = '';
let cmbElementTabStart = true;
let cmbStyleObject={};
let cmbStyleUnits = {
    'px': 'px',
    '%': '%',
    'rem': 'rem',
    'vw': 'vw',
    'vh': 'vh',
    'vmax': 'vmax',
    'vmin': 'vmin'
};
let cmbDisplay = [
    ['Regular', '<576px', '-'],
    ['Small', '≥576px', '-sm-'],
    ['Medium', '≥768px', '-md-'],
    ['Large', '≥992px', '-lg-'],
    ['Extra Large', '≥1200px', '-xl-']
];
let cmbDisplaySeparator = '-*-';
let cmbDisplaySizes = cmbDisplay.map(function(value,index) { return value[0]; });

let cmbClassInputs = {};


