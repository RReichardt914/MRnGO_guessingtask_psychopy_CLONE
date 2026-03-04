/***************** 
 * Untitled *
 *****************/


// store info about the experiment session:
let expName = 'untitled';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
    'stimPresTime': '5',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// Run 'Before Experiment' code from written_button_placement
var showFeedback = false;
// Run 'Before Experiment' code from written_button_placement_main
var showFeedback = false;
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(start_screenRoutineBegin());
flowScheduler.add(start_screenRoutineEachFrame());
flowScheduler.add(start_screenRoutineEnd());
flowScheduler.add(welcome_screenRoutineBegin());
flowScheduler.add(welcome_screenRoutineEachFrame());
flowScheduler.add(welcome_screenRoutineEnd());
flowScheduler.add(rules_start_screenRoutineBegin());
flowScheduler.add(rules_start_screenRoutineEachFrame());
flowScheduler.add(rules_start_screenRoutineEnd());
flowScheduler.add(rules_01_screenRoutineBegin());
flowScheduler.add(rules_01_screenRoutineEachFrame());
flowScheduler.add(rules_01_screenRoutineEnd());
flowScheduler.add(rules_02_screenRoutineBegin());
flowScheduler.add(rules_02_screenRoutineEachFrame());
flowScheduler.add(rules_02_screenRoutineEnd());
flowScheduler.add(trial_start_screenRoutineBegin());
flowScheduler.add(trial_start_screenRoutineEachFrame());
flowScheduler.add(trial_start_screenRoutineEnd());
const training_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(training_loopLoopBegin(training_loopLoopScheduler));
flowScheduler.add(training_loopLoopScheduler);
flowScheduler.add(training_loopLoopEnd);





flowScheduler.add(main_start_screenRoutineBegin());
flowScheduler.add(main_start_screenRoutineEachFrame());
flowScheduler.add(main_start_screenRoutineEnd());
const main_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(main_loopLoopBegin(main_loopLoopScheduler));
flowScheduler.add(main_loopLoopScheduler);
flowScheduler.add(main_loopLoopEnd);





flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'sequences/training_modified.csv', 'path': 'sequences/training_modified.csv'},
    {'name': 'stimuli/stim001.png', 'path': 'stimuli/stim001.png'},
    {'name': 'stimuli/stim002.png', 'path': 'stimuli/stim002.png'},
    {'name': 'stimuli/stim003.png', 'path': 'stimuli/stim003.png'},
    {'name': 'sequences/main_modified.csv', 'path': 'sequences/main_modified.csv'},
    {'name': 'stimuli/stim004.png', 'path': 'stimuli/stim004.png'},
    {'name': 'stimuli/stim005.png', 'path': 'stimuli/stim005.png'},
    {'name': 'stimuli/stim006.png', 'path': 'stimuli/stim006.png'},
    {'name': 'assets/bg_start.png', 'path': 'assets/bg_start.png'},
    {'name': 'assets/button_start.png', 'path': 'assets/button_start.png'},
    {'name': 'assets/bg_welcome.png', 'path': 'assets/bg_welcome.png'},
    {'name': 'assets/button_jatsszunk.png', 'path': 'assets/button_jatsszunk.png'},
    {'name': 'assets/bg_rules-start.png', 'path': 'assets/bg_rules-start.png'},
    {'name': 'assets/bg_rules-01.png', 'path': 'assets/bg_rules-01.png'},
    {'name': 'assets/bg_rules-02.png', 'path': 'assets/bg_rules-02.png'},
    {'name': 'assets/bg_trial-start.png', 'path': 'assets/bg_trial-start.png'},
    {'name': 'assets/bg_stimpres.png', 'path': 'assets/bg_stimpres.png'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
    {'name': 'assets/bg_yesno.png', 'path': 'assets/bg_yesno.png'},
    {'name': 'assets/button_igen.png', 'path': 'assets/button_igen.png'},
    {'name': 'assets/button_nem.png', 'path': 'assets/button_nem.png'},
    {'name': 'assets/bg_written.png', 'path': 'assets/bg_written.png'},
    {'name': 'assets/bg_feedback.png', 'path': 'assets/bg_feedback.png'},
    {'name': 'assets/bg_main-start.png', 'path': 'assets/bg_main-start.png'},
    {'name': 'assets/bg_goodbye.png', 'path': 'assets/bg_goodbye.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);

async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2025.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}

async function experimentInit() {
  // Initialize components for Routine "start_screen"
  start_screenClock = new util.Clock();
  bg_start_img = new visual.ImageStim({
    win : psychoJS.window,
    name : 'bg_start_img', units : 'norm', 
    image : 'assets/bg_start.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [2, 2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  btn_start_img = new visual.ImageStim({
    win : psychoJS.window,
    name : 'btn_start_img', units : 'pix', 
    image : 'assets/button_start.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [268.5, 87],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  click_start_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  click_start_mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "welcome_screen"
  welcome_screenClock = new util.Clock();
  bg_welcome_img = new visual.ImageStim({
    win : psychoJS.window,
    name : 'bg_welcome_img', units : 'norm', 
    image : 'assets/bg_welcome.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [2, 2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  btn_welcome_img = new visual.ImageStim({
    win : psychoJS.window,
    name : 'btn_welcome_img', units : 'pix', 
    image : 'assets/button_jatsszunk.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : undefined, 
    draggable: false,
    size : [272, 74.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  click_welcome_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  click_welcome_mouse.mouseClock = new util.Clock();
  // Run 'Begin Experiment' code from welcome_screen_button_placement
  let w = psychoJS.window.size[0];  // window width in px
  let h = psychoJS.window.size[1];  // window height in px
  
  btn_welcome_img.pos = [w/3, -h/3];  // bottom-right third center
  // Initialize components for Routine "rules_start_screen"
  rules_start_screenClock = new util.Clock();
  bg_rulesstart_img = new visual.ImageStim({
    win : psychoJS.window,
    name : 'bg_rulesstart_img', units : 'norm', 
    image : 'assets/bg_rules-start.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [2, 2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  btn_rulesstart_img = new visual.ImageStim({
    win : psychoJS.window,
    name : 'btn_rulesstart_img', units : 'pix', 
    image : 'assets/button_jatsszunk.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : undefined, 
    draggable: false,
    size : [272, 74.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  click_rulesstart_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  click_rulesstart_mouse.mouseClock = new util.Clock();
  // Run 'Begin Experiment' code from rulesstart_screen_button_placement
  btn_rulesstart_img.pos = [-w/3, -h/3];  // bottom-right third center
  // Initialize components for Routine "rules_01_screen"
  rules_01_screenClock = new util.Clock();
  bg_rules01_img = new visual.ImageStim({
    win : psychoJS.window,
    name : 'bg_rules01_img', units : 'norm', 
    image : 'assets/bg_rules-01.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [2, 2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  btn_rules01_img = new visual.ImageStim({
    win : psychoJS.window,
    name : 'btn_rules01_img', units : 'pix', 
    image : 'assets/button_jatsszunk.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : undefined, 
    draggable: false,
    size : [272, 74.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  click_rules01_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  click_rules01_mouse.mouseClock = new util.Clock();
  // Run 'Begin Experiment' code from rules01_screen_button_placement
  btn_rules01_img.pos = [-w/3, -h/3];  // bottom-right third center
  // Initialize components for Routine "rules_02_screen"
  rules_02_screenClock = new util.Clock();
  bg_rules02_img = new visual.ImageStim({
    win : psychoJS.window,
    name : 'bg_rules02_img', units : 'norm', 
    image : 'assets/bg_rules-02.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [2, 2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  btn_rules02_img = new visual.ImageStim({
    win : psychoJS.window,
    name : 'btn_rules02_img', units : 'pix', 
    image : 'assets/button_jatsszunk.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : undefined, 
    draggable: false,
    size : [272, 74.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  click_rules02_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  click_rules02_mouse.mouseClock = new util.Clock();
  // Run 'Begin Experiment' code from rules02_screen_button_placement
  btn_rules02_img.pos = [w/3, h/3];  // bottom-right third center
  // Initialize components for Routine "trial_start_screen"
  trial_start_screenClock = new util.Clock();
  bg_trialstart_img = new visual.ImageStim({
    win : psychoJS.window,
    name : 'bg_trialstart_img', units : 'norm', 
    image : 'assets/bg_trial-start.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [2, 2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  btn_trialstart_img = new visual.ImageStim({
    win : psychoJS.window,
    name : 'btn_trialstart_img', units : 'pix', 
    image : 'assets/button_start.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : undefined, 
    draggable: false,
    size : [268.5, 87],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  click_trialstart_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  click_trialstart_mouse.mouseClock = new util.Clock();
  // Run 'Begin Experiment' code from trialstart_screen_button_placement
  btn_trialstart_img.pos = [3*(w/8), 0];  // bottom-right third center
  // Initialize components for Routine "training_stimulus_presentation"
  training_stimulus_presentationClock = new util.Clock();
  bg_trial_stimpres = new visual.ImageStim({
    win : psychoJS.window,
    name : 'bg_trial_stimpres', units : 'norm', 
    image : 'assets/bg_stimpres.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [2, 2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  stimulus_presentation_train = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stimulus_presentation_train', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  stop_training = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "training_yesno_response"
  training_yesno_responseClock = new util.Clock();
  bg_trial_yesno = new visual.ImageStim({
    win : psychoJS.window,
    name : 'bg_trial_yesno', units : 'norm', 
    image : 'assets/bg_yesno.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [2, 2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  btn_yesno_yes_img = new visual.ImageStim({
    win : psychoJS.window,
    name : 'btn_yesno_yes_img', units : 'pix', 
    image : 'assets/button_igen.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : undefined, 
    draggable: false,
    size : [268.5, 87],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  btn_yesno_no_img = new visual.ImageStim({
    win : psychoJS.window,
    name : 'btn_yesno_no_img', units : 'pix', 
    image : 'assets/button_nem.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : undefined, 
    draggable: false,
    size : [268.5, 87],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  trial_yesno_response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  click_yesno_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  click_yesno_mouse.mouseClock = new util.Clock();
  // Run 'Begin Experiment' code from training_yesno_button_placement
  btn_yesno_yes_img.pos = [w/4, -h/3];
  btn_yesno_no_img.pos = [-w/4, -h/3];
  // Initialize components for Routine "training_written_response"
  training_written_responseClock = new util.Clock();
  bg_trial_written = new visual.ImageStim({
    win : psychoJS.window,
    name : 'bg_trial_written', units : 'norm', 
    image : 'assets/bg_written.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [2, 2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  // Run 'Begin Experiment' code from code_whatconc
  var window.previousText = {}; 
  textbox_response_training = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_response_training',
    text: '',
    placeholder: undefined,
    font: 'Arial',
    pos: [0, (- 0.12)], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [1, 0.1],  units: undefined, 
    ori: 0.0,
    color: (-1.0000, -1.0000, 0.0902), colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  click_written_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  click_written_mouse.mouseClock = new util.Clock();
  btn_written_img = new visual.ImageStim({
    win : psychoJS.window,
    name : 'btn_written_img', units : 'pix', 
    image : 'assets/button_jatsszunk.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : undefined, 
    draggable: false,
    size : [272, 74.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  // Run 'Begin Experiment' code from written_button_placement
  btn_written_img.pos = [0, -h/3];  // bottom-right third center
  // Initialize components for Routine "training_feedback"
  training_feedbackClock = new util.Clock();
  bg_feedback_train = new visual.ImageStim({
    win : psychoJS.window,
    name : 'bg_feedback_train', units : 'norm', 
    image : 'assets/bg_feedback.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [2, 2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  btn_feedback_img = new visual.ImageStim({
    win : psychoJS.window,
    name : 'btn_feedback_img', units : 'pix', 
    image : 'assets/button_jatsszunk.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : undefined, 
    draggable: false,
    size : [272, 74.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  click_feedback_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  click_feedback_mouse.mouseClock = new util.Clock();
  // Run 'Begin Experiment' code from feedback_screen_button_placement
  btn_feedback_img.pos = [0, -h/3];  // bottom-right third center
  feedback_concept = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_concept',
    text: '',
    font: 'Arial',
    units: 'norm', 
    pos: [(- 0.4), 0.3], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color((-1.0000, -1.0000, 0.0902)),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "main_start_screen"
  main_start_screenClock = new util.Clock();
  bg_mainstart_img = new visual.ImageStim({
    win : psychoJS.window,
    name : 'bg_mainstart_img', units : 'norm', 
    image : 'assets/bg_main-start.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [2, 2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  btn_mainstart_img = new visual.ImageStim({
    win : psychoJS.window,
    name : 'btn_mainstart_img', units : 'pix', 
    image : 'assets/button_start.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : undefined, 
    draggable: false,
    size : [268.5, 87],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  click_mainstart_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  click_mainstart_mouse.mouseClock = new util.Clock();
  // Run 'Begin Experiment' code from mainstart_screen_button_placement
  btn_mainstart_img.pos = [-3*(w/8), 0];  // bottom-right third center
  // Initialize components for Routine "main_stimulus_presentation"
  main_stimulus_presentationClock = new util.Clock();
  bg_main_stimpres = new visual.ImageStim({
    win : psychoJS.window,
    name : 'bg_main_stimpres', units : 'norm', 
    image : 'assets/bg_stimpres.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [2, 2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  stimulus_presentation_main = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stimulus_presentation_main', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "main_yesno_response"
  main_yesno_responseClock = new util.Clock();
  bg_main_yesno = new visual.ImageStim({
    win : psychoJS.window,
    name : 'bg_main_yesno', units : 'norm', 
    image : 'assets/bg_yesno.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [2, 2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  btn_yesno_yes_main = new visual.ImageStim({
    win : psychoJS.window,
    name : 'btn_yesno_yes_main', units : 'pix', 
    image : 'assets/button_igen.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : undefined, 
    draggable: false,
    size : [268.5, 87],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  btn_yesno_no_main = new visual.ImageStim({
    win : psychoJS.window,
    name : 'btn_yesno_no_main', units : 'pix', 
    image : 'assets/button_nem.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : undefined, 
    draggable: false,
    size : [268.5, 87],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  main_yesno_key_response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  main_yesno_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  main_yesno_mouse.mouseClock = new util.Clock();
  // Run 'Begin Experiment' code from main_yesno_button_placement
  btn_yesno_yes_main.pos = [w/4, -h/3];
  btn_yesno_no_main.pos = [-w/4, -h/3];
  // Initialize components for Routine "main_written_response"
  main_written_responseClock = new util.Clock();
  bg_main_written = new visual.ImageStim({
    win : psychoJS.window,
    name : 'bg_main_written', units : 'norm', 
    image : 'assets/bg_written.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [2, 2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  textbox_response_main = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_response_main',
    text: '',
    placeholder: undefined,
    font: 'Arial',
    pos: [0, (- 0.12)], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [1, 0.1],  units: undefined, 
    ori: 0.0,
    color: (-1.0000, -1.0000, 0.0902), colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  main_written_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  main_written_mouse.mouseClock = new util.Clock();
  btn_written_main = new visual.ImageStim({
    win : psychoJS.window,
    name : 'btn_written_main', units : 'pix', 
    image : 'assets/button_jatsszunk.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : undefined, 
    draggable: false,
    size : [272, 74.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  // Run 'Begin Experiment' code from written_button_placement_main
  btn_written_main.pos = [0, -h/3];  // bottom-right third center
  // Initialize components for Routine "main_feedback"
  main_feedbackClock = new util.Clock();
  bg_feedback_main = new visual.ImageStim({
    win : psychoJS.window,
    name : 'bg_feedback_main', units : 'norm', 
    image : 'assets/bg_feedback.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [2, 2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  btn_feedback_main = new visual.ImageStim({
    win : psychoJS.window,
    name : 'btn_feedback_main', units : 'pix', 
    image : 'assets/button_jatsszunk.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : undefined, 
    draggable: false,
    size : [272, 74.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  main_feedback_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  main_feedback_mouse.mouseClock = new util.Clock();
  // Run 'Begin Experiment' code from feedback_screen_button_placement_main
  btn_feedback_main.pos = [0, -h/3];  // bottom-right third center
  feedback_concept_main = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_concept_main',
    text: '',
    font: 'Arial',
    units: 'norm', 
    pos: [(- 0.4), 0.3], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color((-1.0000, -1.0000, 0.0902)),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  bg_goodbye_img = new visual.ImageStim({
    win : psychoJS.window,
    name : 'bg_goodbye_img', units : 'norm', 
    image : 'assets/bg_goodbye.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [2, 2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}

function start_screenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'start_screen' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    start_screenClock.reset();
    routineTimer.reset();
    start_screenMaxDurationReached = false;
    // update component parameters for each repeat
    // setup some python lists for storing info about the click_start_mouse
    // current position of the mouse:
    click_start_mouse.x = [];
    click_start_mouse.y = [];
    click_start_mouse.leftButton = [];
    click_start_mouse.midButton = [];
    click_start_mouse.rightButton = [];
    click_start_mouse.time = [];
    click_start_mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('start_screen.started', globalClock.getTime());
    start_screenMaxDuration = null
    // keep track of which components have finished
    start_screenComponents = [];
    start_screenComponents.push(bg_start_img);
    start_screenComponents.push(btn_start_img);
    start_screenComponents.push(click_start_mouse);
    
    start_screenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function start_screenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'start_screen' ---
    // get current time
    t = start_screenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *bg_start_img* updates
    if (t >= 0.0 && bg_start_img.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bg_start_img.tStart = t;  // (not accounting for frame time here)
      bg_start_img.frameNStart = frameN;  // exact frame index
      
      bg_start_img.setAutoDraw(true);
    }
    
    
    // if bg_start_img is active this frame...
    if (bg_start_img.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *btn_start_img* updates
    if (t >= 0.0 && btn_start_img.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      btn_start_img.tStart = t;  // (not accounting for frame time here)
      btn_start_img.frameNStart = frameN;  // exact frame index
      
      btn_start_img.setAutoDraw(true);
    }
    
    
    // if btn_start_img is active this frame...
    if (btn_start_img.status === PsychoJS.Status.STARTED) {
    }
    
    // *click_start_mouse* updates
    if (t >= 0.0 && click_start_mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      click_start_mouse.tStart = t;  // (not accounting for frame time here)
      click_start_mouse.frameNStart = frameN;  // exact frame index
      
      click_start_mouse.status = PsychoJS.Status.STARTED;
      click_start_mouse.mouseClock.reset();
      prevButtonState = click_start_mouse.getPressed();  // if button is down already this ISN'T a new click
    }
    
    // if click_start_mouse is active this frame...
    if (click_start_mouse.status === PsychoJS.Status.STARTED) {
      _mouseButtons = click_start_mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          click_start_mouse.clickableObjects = eval(btn_start_img)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(click_start_mouse.clickableObjects)) {
              click_start_mouse.clickableObjects = [click_start_mouse.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of click_start_mouse.clickableObjects) {
              if (obj.contains(click_start_mouse)) {
                  gotValidClick = true;
                  click_start_mouse.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              click_start_mouse.clicked_name.push(null);
          }
          _mouseXYs = click_start_mouse.getPos();
          click_start_mouse.x.push(_mouseXYs[0]);
          click_start_mouse.y.push(_mouseXYs[1]);
          click_start_mouse.leftButton.push(_mouseButtons[0]);
          click_start_mouse.midButton.push(_mouseButtons[1]);
          click_start_mouse.rightButton.push(_mouseButtons[2]);
          click_start_mouse.time.push(click_start_mouse.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    start_screenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function start_screenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'start_screen' ---
    start_screenComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('start_screen.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('click_start_mouse.x', click_start_mouse.x);
    psychoJS.experiment.addData('click_start_mouse.y', click_start_mouse.y);
    psychoJS.experiment.addData('click_start_mouse.leftButton', click_start_mouse.leftButton);
    psychoJS.experiment.addData('click_start_mouse.midButton', click_start_mouse.midButton);
    psychoJS.experiment.addData('click_start_mouse.rightButton', click_start_mouse.rightButton);
    psychoJS.experiment.addData('click_start_mouse.time', click_start_mouse.time);
    psychoJS.experiment.addData('click_start_mouse.clicked_name', click_start_mouse.clicked_name);
    
    // the Routine "start_screen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function welcome_screenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'welcome_screen' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    welcome_screenClock.reset();
    routineTimer.reset();
    welcome_screenMaxDurationReached = false;
    // update component parameters for each repeat
    // setup some python lists for storing info about the click_welcome_mouse
    // current position of the mouse:
    click_welcome_mouse.x = [];
    click_welcome_mouse.y = [];
    click_welcome_mouse.leftButton = [];
    click_welcome_mouse.midButton = [];
    click_welcome_mouse.rightButton = [];
    click_welcome_mouse.time = [];
    click_welcome_mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('welcome_screen.started', globalClock.getTime());
    welcome_screenMaxDuration = null
    // keep track of which components have finished
    welcome_screenComponents = [];
    welcome_screenComponents.push(bg_welcome_img);
    welcome_screenComponents.push(btn_welcome_img);
    welcome_screenComponents.push(click_welcome_mouse);
    
    welcome_screenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function welcome_screenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'welcome_screen' ---
    // get current time
    t = welcome_screenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *bg_welcome_img* updates
    if (t >= 0.0 && bg_welcome_img.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bg_welcome_img.tStart = t;  // (not accounting for frame time here)
      bg_welcome_img.frameNStart = frameN;  // exact frame index
      
      bg_welcome_img.setAutoDraw(true);
    }
    
    
    // if bg_welcome_img is active this frame...
    if (bg_welcome_img.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *btn_welcome_img* updates
    if (t >= 0.0 && btn_welcome_img.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      btn_welcome_img.tStart = t;  // (not accounting for frame time here)
      btn_welcome_img.frameNStart = frameN;  // exact frame index
      
      btn_welcome_img.setAutoDraw(true);
    }
    
    
    // if btn_welcome_img is active this frame...
    if (btn_welcome_img.status === PsychoJS.Status.STARTED) {
    }
    
    // *click_welcome_mouse* updates
    if (t >= 0.0 && click_welcome_mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      click_welcome_mouse.tStart = t;  // (not accounting for frame time here)
      click_welcome_mouse.frameNStart = frameN;  // exact frame index
      
      click_welcome_mouse.status = PsychoJS.Status.STARTED;
      click_welcome_mouse.mouseClock.reset();
      prevButtonState = click_welcome_mouse.getPressed();  // if button is down already this ISN'T a new click
    }
    
    // if click_welcome_mouse is active this frame...
    if (click_welcome_mouse.status === PsychoJS.Status.STARTED) {
      _mouseButtons = click_welcome_mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          click_welcome_mouse.clickableObjects = eval(btn_welcome_img)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(click_welcome_mouse.clickableObjects)) {
              click_welcome_mouse.clickableObjects = [click_welcome_mouse.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of click_welcome_mouse.clickableObjects) {
              if (obj.contains(click_welcome_mouse)) {
                  gotValidClick = true;
                  click_welcome_mouse.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              click_welcome_mouse.clicked_name.push(null);
          }
          _mouseXYs = click_welcome_mouse.getPos();
          click_welcome_mouse.x.push(_mouseXYs[0]);
          click_welcome_mouse.y.push(_mouseXYs[1]);
          click_welcome_mouse.leftButton.push(_mouseButtons[0]);
          click_welcome_mouse.midButton.push(_mouseButtons[1]);
          click_welcome_mouse.rightButton.push(_mouseButtons[2]);
          click_welcome_mouse.time.push(click_welcome_mouse.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    welcome_screenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function welcome_screenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'welcome_screen' ---
    welcome_screenComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('welcome_screen.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('click_welcome_mouse.x', click_welcome_mouse.x);
    psychoJS.experiment.addData('click_welcome_mouse.y', click_welcome_mouse.y);
    psychoJS.experiment.addData('click_welcome_mouse.leftButton', click_welcome_mouse.leftButton);
    psychoJS.experiment.addData('click_welcome_mouse.midButton', click_welcome_mouse.midButton);
    psychoJS.experiment.addData('click_welcome_mouse.rightButton', click_welcome_mouse.rightButton);
    psychoJS.experiment.addData('click_welcome_mouse.time', click_welcome_mouse.time);
    psychoJS.experiment.addData('click_welcome_mouse.clicked_name', click_welcome_mouse.clicked_name);
    
    // the Routine "welcome_screen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function rules_start_screenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'rules_start_screen' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    rules_start_screenClock.reset();
    routineTimer.reset();
    rules_start_screenMaxDurationReached = false;
    // update component parameters for each repeat
    // setup some python lists for storing info about the click_rulesstart_mouse
    // current position of the mouse:
    click_rulesstart_mouse.x = [];
    click_rulesstart_mouse.y = [];
    click_rulesstart_mouse.leftButton = [];
    click_rulesstart_mouse.midButton = [];
    click_rulesstart_mouse.rightButton = [];
    click_rulesstart_mouse.time = [];
    click_rulesstart_mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('rules_start_screen.started', globalClock.getTime());
    rules_start_screenMaxDuration = null
    // keep track of which components have finished
    rules_start_screenComponents = [];
    rules_start_screenComponents.push(bg_rulesstart_img);
    rules_start_screenComponents.push(btn_rulesstart_img);
    rules_start_screenComponents.push(click_rulesstart_mouse);
    
    rules_start_screenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function rules_start_screenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'rules_start_screen' ---
    // get current time
    t = rules_start_screenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *bg_rulesstart_img* updates
    if (t >= 0.0 && bg_rulesstart_img.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bg_rulesstart_img.tStart = t;  // (not accounting for frame time here)
      bg_rulesstart_img.frameNStart = frameN;  // exact frame index
      
      bg_rulesstart_img.setAutoDraw(true);
    }
    
    
    // if bg_rulesstart_img is active this frame...
    if (bg_rulesstart_img.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *btn_rulesstart_img* updates
    if (t >= 0.0 && btn_rulesstart_img.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      btn_rulesstart_img.tStart = t;  // (not accounting for frame time here)
      btn_rulesstart_img.frameNStart = frameN;  // exact frame index
      
      btn_rulesstart_img.setAutoDraw(true);
    }
    
    
    // if btn_rulesstart_img is active this frame...
    if (btn_rulesstart_img.status === PsychoJS.Status.STARTED) {
    }
    
    // *click_rulesstart_mouse* updates
    if (t >= 0.0 && click_rulesstart_mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      click_rulesstart_mouse.tStart = t;  // (not accounting for frame time here)
      click_rulesstart_mouse.frameNStart = frameN;  // exact frame index
      
      click_rulesstart_mouse.status = PsychoJS.Status.STARTED;
      click_rulesstart_mouse.mouseClock.reset();
      prevButtonState = click_rulesstart_mouse.getPressed();  // if button is down already this ISN'T a new click
    }
    
    // if click_rulesstart_mouse is active this frame...
    if (click_rulesstart_mouse.status === PsychoJS.Status.STARTED) {
      _mouseButtons = click_rulesstart_mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          click_rulesstart_mouse.clickableObjects = eval(btn_rulesstart_img)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(click_rulesstart_mouse.clickableObjects)) {
              click_rulesstart_mouse.clickableObjects = [click_rulesstart_mouse.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of click_rulesstart_mouse.clickableObjects) {
              if (obj.contains(click_rulesstart_mouse)) {
                  gotValidClick = true;
                  click_rulesstart_mouse.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              click_rulesstart_mouse.clicked_name.push(null);
          }
          _mouseXYs = click_rulesstart_mouse.getPos();
          click_rulesstart_mouse.x.push(_mouseXYs[0]);
          click_rulesstart_mouse.y.push(_mouseXYs[1]);
          click_rulesstart_mouse.leftButton.push(_mouseButtons[0]);
          click_rulesstart_mouse.midButton.push(_mouseButtons[1]);
          click_rulesstart_mouse.rightButton.push(_mouseButtons[2]);
          click_rulesstart_mouse.time.push(click_rulesstart_mouse.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    rules_start_screenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function rules_start_screenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'rules_start_screen' ---
    rules_start_screenComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('rules_start_screen.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('click_rulesstart_mouse.x', click_rulesstart_mouse.x);
    psychoJS.experiment.addData('click_rulesstart_mouse.y', click_rulesstart_mouse.y);
    psychoJS.experiment.addData('click_rulesstart_mouse.leftButton', click_rulesstart_mouse.leftButton);
    psychoJS.experiment.addData('click_rulesstart_mouse.midButton', click_rulesstart_mouse.midButton);
    psychoJS.experiment.addData('click_rulesstart_mouse.rightButton', click_rulesstart_mouse.rightButton);
    psychoJS.experiment.addData('click_rulesstart_mouse.time', click_rulesstart_mouse.time);
    psychoJS.experiment.addData('click_rulesstart_mouse.clicked_name', click_rulesstart_mouse.clicked_name);
    
    // the Routine "rules_start_screen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function rules_01_screenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'rules_01_screen' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    rules_01_screenClock.reset();
    routineTimer.reset();
    rules_01_screenMaxDurationReached = false;
    // update component parameters for each repeat
    // setup some python lists for storing info about the click_rules01_mouse
    // current position of the mouse:
    click_rules01_mouse.x = [];
    click_rules01_mouse.y = [];
    click_rules01_mouse.leftButton = [];
    click_rules01_mouse.midButton = [];
    click_rules01_mouse.rightButton = [];
    click_rules01_mouse.time = [];
    click_rules01_mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('rules_01_screen.started', globalClock.getTime());
    rules_01_screenMaxDuration = null
    // keep track of which components have finished
    rules_01_screenComponents = [];
    rules_01_screenComponents.push(bg_rules01_img);
    rules_01_screenComponents.push(btn_rules01_img);
    rules_01_screenComponents.push(click_rules01_mouse);
    
    rules_01_screenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function rules_01_screenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'rules_01_screen' ---
    // get current time
    t = rules_01_screenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *bg_rules01_img* updates
    if (t >= 0.0 && bg_rules01_img.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bg_rules01_img.tStart = t;  // (not accounting for frame time here)
      bg_rules01_img.frameNStart = frameN;  // exact frame index
      
      bg_rules01_img.setAutoDraw(true);
    }
    
    
    // if bg_rules01_img is active this frame...
    if (bg_rules01_img.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *btn_rules01_img* updates
    if (t >= 0.0 && btn_rules01_img.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      btn_rules01_img.tStart = t;  // (not accounting for frame time here)
      btn_rules01_img.frameNStart = frameN;  // exact frame index
      
      btn_rules01_img.setAutoDraw(true);
    }
    
    
    // if btn_rules01_img is active this frame...
    if (btn_rules01_img.status === PsychoJS.Status.STARTED) {
    }
    
    // *click_rules01_mouse* updates
    if (t >= 0.0 && click_rules01_mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      click_rules01_mouse.tStart = t;  // (not accounting for frame time here)
      click_rules01_mouse.frameNStart = frameN;  // exact frame index
      
      click_rules01_mouse.status = PsychoJS.Status.STARTED;
      click_rules01_mouse.mouseClock.reset();
      prevButtonState = click_rules01_mouse.getPressed();  // if button is down already this ISN'T a new click
    }
    
    // if click_rules01_mouse is active this frame...
    if (click_rules01_mouse.status === PsychoJS.Status.STARTED) {
      _mouseButtons = click_rules01_mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          click_rules01_mouse.clickableObjects = eval(btn_rules01_img)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(click_rules01_mouse.clickableObjects)) {
              click_rules01_mouse.clickableObjects = [click_rules01_mouse.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of click_rules01_mouse.clickableObjects) {
              if (obj.contains(click_rules01_mouse)) {
                  gotValidClick = true;
                  click_rules01_mouse.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              click_rules01_mouse.clicked_name.push(null);
          }
          _mouseXYs = click_rules01_mouse.getPos();
          click_rules01_mouse.x.push(_mouseXYs[0]);
          click_rules01_mouse.y.push(_mouseXYs[1]);
          click_rules01_mouse.leftButton.push(_mouseButtons[0]);
          click_rules01_mouse.midButton.push(_mouseButtons[1]);
          click_rules01_mouse.rightButton.push(_mouseButtons[2]);
          click_rules01_mouse.time.push(click_rules01_mouse.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    rules_01_screenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function rules_01_screenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'rules_01_screen' ---
    rules_01_screenComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('rules_01_screen.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('click_rules01_mouse.x', click_rules01_mouse.x);
    psychoJS.experiment.addData('click_rules01_mouse.y', click_rules01_mouse.y);
    psychoJS.experiment.addData('click_rules01_mouse.leftButton', click_rules01_mouse.leftButton);
    psychoJS.experiment.addData('click_rules01_mouse.midButton', click_rules01_mouse.midButton);
    psychoJS.experiment.addData('click_rules01_mouse.rightButton', click_rules01_mouse.rightButton);
    psychoJS.experiment.addData('click_rules01_mouse.time', click_rules01_mouse.time);
    psychoJS.experiment.addData('click_rules01_mouse.clicked_name', click_rules01_mouse.clicked_name);
    
    // the Routine "rules_01_screen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function rules_02_screenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'rules_02_screen' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    rules_02_screenClock.reset();
    routineTimer.reset();
    rules_02_screenMaxDurationReached = false;
    // update component parameters for each repeat
    // setup some python lists for storing info about the click_rules02_mouse
    // current position of the mouse:
    click_rules02_mouse.x = [];
    click_rules02_mouse.y = [];
    click_rules02_mouse.leftButton = [];
    click_rules02_mouse.midButton = [];
    click_rules02_mouse.rightButton = [];
    click_rules02_mouse.time = [];
    click_rules02_mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('rules_02_screen.started', globalClock.getTime());
    rules_02_screenMaxDuration = null
    // keep track of which components have finished
    rules_02_screenComponents = [];
    rules_02_screenComponents.push(bg_rules02_img);
    rules_02_screenComponents.push(btn_rules02_img);
    rules_02_screenComponents.push(click_rules02_mouse);
    
    rules_02_screenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function rules_02_screenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'rules_02_screen' ---
    // get current time
    t = rules_02_screenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *bg_rules02_img* updates
    if (t >= 0.0 && bg_rules02_img.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bg_rules02_img.tStart = t;  // (not accounting for frame time here)
      bg_rules02_img.frameNStart = frameN;  // exact frame index
      
      bg_rules02_img.setAutoDraw(true);
    }
    
    
    // if bg_rules02_img is active this frame...
    if (bg_rules02_img.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *btn_rules02_img* updates
    if (t >= 0.0 && btn_rules02_img.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      btn_rules02_img.tStart = t;  // (not accounting for frame time here)
      btn_rules02_img.frameNStart = frameN;  // exact frame index
      
      btn_rules02_img.setAutoDraw(true);
    }
    
    
    // if btn_rules02_img is active this frame...
    if (btn_rules02_img.status === PsychoJS.Status.STARTED) {
    }
    
    // *click_rules02_mouse* updates
    if (t >= 0.0 && click_rules02_mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      click_rules02_mouse.tStart = t;  // (not accounting for frame time here)
      click_rules02_mouse.frameNStart = frameN;  // exact frame index
      
      click_rules02_mouse.status = PsychoJS.Status.STARTED;
      click_rules02_mouse.mouseClock.reset();
      prevButtonState = click_rules02_mouse.getPressed();  // if button is down already this ISN'T a new click
    }
    
    // if click_rules02_mouse is active this frame...
    if (click_rules02_mouse.status === PsychoJS.Status.STARTED) {
      _mouseButtons = click_rules02_mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          click_rules02_mouse.clickableObjects = eval(btn_rules02_img)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(click_rules02_mouse.clickableObjects)) {
              click_rules02_mouse.clickableObjects = [click_rules02_mouse.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of click_rules02_mouse.clickableObjects) {
              if (obj.contains(click_rules02_mouse)) {
                  gotValidClick = true;
                  click_rules02_mouse.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              click_rules02_mouse.clicked_name.push(null);
          }
          _mouseXYs = click_rules02_mouse.getPos();
          click_rules02_mouse.x.push(_mouseXYs[0]);
          click_rules02_mouse.y.push(_mouseXYs[1]);
          click_rules02_mouse.leftButton.push(_mouseButtons[0]);
          click_rules02_mouse.midButton.push(_mouseButtons[1]);
          click_rules02_mouse.rightButton.push(_mouseButtons[2]);
          click_rules02_mouse.time.push(click_rules02_mouse.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    rules_02_screenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function rules_02_screenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'rules_02_screen' ---
    rules_02_screenComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('rules_02_screen.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('click_rules02_mouse.x', click_rules02_mouse.x);
    psychoJS.experiment.addData('click_rules02_mouse.y', click_rules02_mouse.y);
    psychoJS.experiment.addData('click_rules02_mouse.leftButton', click_rules02_mouse.leftButton);
    psychoJS.experiment.addData('click_rules02_mouse.midButton', click_rules02_mouse.midButton);
    psychoJS.experiment.addData('click_rules02_mouse.rightButton', click_rules02_mouse.rightButton);
    psychoJS.experiment.addData('click_rules02_mouse.time', click_rules02_mouse.time);
    psychoJS.experiment.addData('click_rules02_mouse.clicked_name', click_rules02_mouse.clicked_name);
    
    // the Routine "rules_02_screen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function trial_start_screenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_start_screen' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    trial_start_screenClock.reset();
    routineTimer.reset();
    trial_start_screenMaxDurationReached = false;
    // update component parameters for each repeat
    // setup some python lists for storing info about the click_trialstart_mouse
    // current position of the mouse:
    click_trialstart_mouse.x = [];
    click_trialstart_mouse.y = [];
    click_trialstart_mouse.leftButton = [];
    click_trialstart_mouse.midButton = [];
    click_trialstart_mouse.rightButton = [];
    click_trialstart_mouse.time = [];
    click_trialstart_mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('trial_start_screen.started', globalClock.getTime());
    trial_start_screenMaxDuration = null
    // keep track of which components have finished
    trial_start_screenComponents = [];
    trial_start_screenComponents.push(bg_trialstart_img);
    trial_start_screenComponents.push(btn_trialstart_img);
    trial_start_screenComponents.push(click_trialstart_mouse);
    
    trial_start_screenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function trial_start_screenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_start_screen' ---
    // get current time
    t = trial_start_screenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *bg_trialstart_img* updates
    if (t >= 0.0 && bg_trialstart_img.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bg_trialstart_img.tStart = t;  // (not accounting for frame time here)
      bg_trialstart_img.frameNStart = frameN;  // exact frame index
      
      bg_trialstart_img.setAutoDraw(true);
    }
    
    
    // if bg_trialstart_img is active this frame...
    if (bg_trialstart_img.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *btn_trialstart_img* updates
    if (t >= 0.0 && btn_trialstart_img.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      btn_trialstart_img.tStart = t;  // (not accounting for frame time here)
      btn_trialstart_img.frameNStart = frameN;  // exact frame index
      
      btn_trialstart_img.setAutoDraw(true);
    }
    
    
    // if btn_trialstart_img is active this frame...
    if (btn_trialstart_img.status === PsychoJS.Status.STARTED) {
    }
    
    // *click_trialstart_mouse* updates
    if (t >= 0.0 && click_trialstart_mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      click_trialstart_mouse.tStart = t;  // (not accounting for frame time here)
      click_trialstart_mouse.frameNStart = frameN;  // exact frame index
      
      click_trialstart_mouse.status = PsychoJS.Status.STARTED;
      click_trialstart_mouse.mouseClock.reset();
      prevButtonState = click_trialstart_mouse.getPressed();  // if button is down already this ISN'T a new click
    }
    
    // if click_trialstart_mouse is active this frame...
    if (click_trialstart_mouse.status === PsychoJS.Status.STARTED) {
      _mouseButtons = click_trialstart_mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          click_trialstart_mouse.clickableObjects = eval(btn_trialstart_img)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(click_trialstart_mouse.clickableObjects)) {
              click_trialstart_mouse.clickableObjects = [click_trialstart_mouse.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of click_trialstart_mouse.clickableObjects) {
              if (obj.contains(click_trialstart_mouse)) {
                  gotValidClick = true;
                  click_trialstart_mouse.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              click_trialstart_mouse.clicked_name.push(null);
          }
          _mouseXYs = click_trialstart_mouse.getPos();
          click_trialstart_mouse.x.push(_mouseXYs[0]);
          click_trialstart_mouse.y.push(_mouseXYs[1]);
          click_trialstart_mouse.leftButton.push(_mouseButtons[0]);
          click_trialstart_mouse.midButton.push(_mouseButtons[1]);
          click_trialstart_mouse.rightButton.push(_mouseButtons[2]);
          click_trialstart_mouse.time.push(click_trialstart_mouse.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trial_start_screenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function trial_start_screenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_start_screen' ---
    trial_start_screenComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('trial_start_screen.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('click_trialstart_mouse.x', click_trialstart_mouse.x);
    psychoJS.experiment.addData('click_trialstart_mouse.y', click_trialstart_mouse.y);
    psychoJS.experiment.addData('click_trialstart_mouse.leftButton', click_trialstart_mouse.leftButton);
    psychoJS.experiment.addData('click_trialstart_mouse.midButton', click_trialstart_mouse.midButton);
    psychoJS.experiment.addData('click_trialstart_mouse.rightButton', click_trialstart_mouse.rightButton);
    psychoJS.experiment.addData('click_trialstart_mouse.time', click_trialstart_mouse.time);
    psychoJS.experiment.addData('click_trialstart_mouse.clicked_name', click_trialstart_mouse.clicked_name);
    
    // the Routine "trial_start_screen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function training_loopLoopBegin(training_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    training_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'sequences/training_modified.csv',
      seed: undefined, name: 'training_loop'
    });
    psychoJS.experiment.addLoop(training_loop); // add the loop to the experiment
    currentLoop = training_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    training_loop.forEach(function() {
      snapshot = training_loop.getSnapshot();
    
      training_loopLoopScheduler.add(importConditions(snapshot));
      training_loopLoopScheduler.add(training_stimulus_presentationRoutineBegin(snapshot));
      training_loopLoopScheduler.add(training_stimulus_presentationRoutineEachFrame());
      training_loopLoopScheduler.add(training_stimulus_presentationRoutineEnd(snapshot));
      training_loopLoopScheduler.add(training_yesno_responseRoutineBegin(snapshot));
      training_loopLoopScheduler.add(training_yesno_responseRoutineEachFrame());
      training_loopLoopScheduler.add(training_yesno_responseRoutineEnd(snapshot));
      training_loopLoopScheduler.add(training_written_responseRoutineBegin(snapshot));
      training_loopLoopScheduler.add(training_written_responseRoutineEachFrame());
      training_loopLoopScheduler.add(training_written_responseRoutineEnd(snapshot));
      training_loopLoopScheduler.add(training_feedbackRoutineBegin(snapshot));
      training_loopLoopScheduler.add(training_feedbackRoutineEachFrame());
      training_loopLoopScheduler.add(training_feedbackRoutineEnd(snapshot));
      training_loopLoopScheduler.add(training_loopLoopEndIteration(training_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}

async function training_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(training_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function training_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function main_loopLoopBegin(main_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    main_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'sequences/main_modified.csv',
      seed: undefined, name: 'main_loop'
    });
    psychoJS.experiment.addLoop(main_loop); // add the loop to the experiment
    currentLoop = main_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    main_loop.forEach(function() {
      snapshot = main_loop.getSnapshot();
    
      main_loopLoopScheduler.add(importConditions(snapshot));
      main_loopLoopScheduler.add(main_stimulus_presentationRoutineBegin(snapshot));
      main_loopLoopScheduler.add(main_stimulus_presentationRoutineEachFrame());
      main_loopLoopScheduler.add(main_stimulus_presentationRoutineEnd(snapshot));
      main_loopLoopScheduler.add(main_yesno_responseRoutineBegin(snapshot));
      main_loopLoopScheduler.add(main_yesno_responseRoutineEachFrame());
      main_loopLoopScheduler.add(main_yesno_responseRoutineEnd(snapshot));
      main_loopLoopScheduler.add(main_written_responseRoutineBegin(snapshot));
      main_loopLoopScheduler.add(main_written_responseRoutineEachFrame());
      main_loopLoopScheduler.add(main_written_responseRoutineEnd(snapshot));
      main_loopLoopScheduler.add(main_feedbackRoutineBegin(snapshot));
      main_loopLoopScheduler.add(main_feedbackRoutineEachFrame());
      main_loopLoopScheduler.add(main_feedbackRoutineEnd(snapshot));
      main_loopLoopScheduler.add(main_loopLoopEndIteration(main_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}

async function main_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(main_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function main_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function training_stimulus_presentationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'training_stimulus_presentation' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    training_stimulus_presentationClock.reset();
    routineTimer.reset();
    training_stimulus_presentationMaxDurationReached = false;
    // update component parameters for each repeat
    stimulus_presentation_train.setImage(stimulus);
    stop_training.keys = undefined;
    stop_training.rt = undefined;
    _stop_training_allKeys = [];
    stop_training.keys = [];
    psychoJS.experiment.addData('training_stimulus_presentation.started', globalClock.getTime());
    training_stimulus_presentationMaxDuration = Number.parseFloat(expInfo["stimPresTime"])
    // keep track of which components have finished
    training_stimulus_presentationComponents = [];
    training_stimulus_presentationComponents.push(bg_trial_stimpres);
    training_stimulus_presentationComponents.push(stimulus_presentation_train);
    training_stimulus_presentationComponents.push(stop_training);
    
    training_stimulus_presentationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function training_stimulus_presentationRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'training_stimulus_presentation' ---
    // get current time
    t = training_stimulus_presentationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // is it time to end the Routine? (based on local clock)
    if (t > training_stimulus_presentationMaxDuration) {
        training_stimulus_presentationMaxDurationReached = true
        continueRoutine = false
    }
    
    // *bg_trial_stimpres* updates
    if (t >= 0.0 && bg_trial_stimpres.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bg_trial_stimpres.tStart = t;  // (not accounting for frame time here)
      bg_trial_stimpres.frameNStart = frameN;  // exact frame index
      
      bg_trial_stimpres.setAutoDraw(true);
    }
    
    
    // if bg_trial_stimpres is active this frame...
    if (bg_trial_stimpres.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *stimulus_presentation_train* updates
    if (t >= 0.0 && stimulus_presentation_train.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stimulus_presentation_train.tStart = t;  // (not accounting for frame time here)
      stimulus_presentation_train.frameNStart = frameN;  // exact frame index
      
      stimulus_presentation_train.setAutoDraw(true);
    }
    
    
    // if stimulus_presentation_train is active this frame...
    if (stimulus_presentation_train.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *stop_training* updates
    if (t >= 0.0 && stop_training.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stop_training.tStart = t;  // (not accounting for frame time here)
      stop_training.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { stop_training.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { stop_training.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { stop_training.clearEvents(); });
    }
    
    // if stop_training is active this frame...
    if (stop_training.status === PsychoJS.Status.STARTED) {
      let theseKeys = stop_training.getKeys({
        keyList: typeof 'q' === 'string' ? ['q'] : 'q', 
        waitRelease: false
      });
      _stop_training_allKeys = _stop_training_allKeys.concat(theseKeys);
      if (_stop_training_allKeys.length > 0) {
        stop_training.keys = _stop_training_allKeys[_stop_training_allKeys.length - 1].name;  // just the last key pressed
        stop_training.rt = _stop_training_allKeys[_stop_training_allKeys.length - 1].rt;
        stop_training.duration = _stop_training_allKeys[_stop_training_allKeys.length - 1].duration;
      }
    }
    
    // Run 'Each Frame' code from code_quit_train
    // press Q to stop the training loop
    if (stop_training.keys.length > 0) {
        training_loop.finished = true;
        continueRoutine = false;
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    training_stimulus_presentationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function training_stimulus_presentationRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'training_stimulus_presentation' ---
    training_stimulus_presentationComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('training_stimulus_presentation.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(stop_training.corr, level);
    }
    psychoJS.experiment.addData('stop_training.keys', stop_training.keys);
    if (typeof stop_training.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('stop_training.rt', stop_training.rt);
        psychoJS.experiment.addData('stop_training.duration', stop_training.duration);
        }
    
    stop_training.stop();
    // the Routine "training_stimulus_presentation" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function training_yesno_responseRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'training_yesno_response' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    training_yesno_responseClock.reset();
    routineTimer.reset();
    training_yesno_responseMaxDurationReached = false;
    // update component parameters for each repeat
    trial_yesno_response.keys = undefined;
    trial_yesno_response.rt = undefined;
    _trial_yesno_response_allKeys = [];
    // setup some python lists for storing info about the click_yesno_mouse
    // current position of the mouse:
    click_yesno_mouse.x = [];
    click_yesno_mouse.y = [];
    click_yesno_mouse.leftButton = [];
    click_yesno_mouse.midButton = [];
    click_yesno_mouse.rightButton = [];
    click_yesno_mouse.time = [];
    click_yesno_mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('training_yesno_response.started', globalClock.getTime());
    training_yesno_responseMaxDuration = null
    // keep track of which components have finished
    training_yesno_responseComponents = [];
    training_yesno_responseComponents.push(bg_trial_yesno);
    training_yesno_responseComponents.push(btn_yesno_yes_img);
    training_yesno_responseComponents.push(btn_yesno_no_img);
    training_yesno_responseComponents.push(trial_yesno_response);
    training_yesno_responseComponents.push(click_yesno_mouse);
    
    training_yesno_responseComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function training_yesno_responseRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'training_yesno_response' ---
    // get current time
    t = training_yesno_responseClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *bg_trial_yesno* updates
    if (t >= 0.0 && bg_trial_yesno.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bg_trial_yesno.tStart = t;  // (not accounting for frame time here)
      bg_trial_yesno.frameNStart = frameN;  // exact frame index
      
      bg_trial_yesno.setAutoDraw(true);
    }
    
    
    // if bg_trial_yesno is active this frame...
    if (bg_trial_yesno.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *btn_yesno_yes_img* updates
    if (t >= 0.0 && btn_yesno_yes_img.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      btn_yesno_yes_img.tStart = t;  // (not accounting for frame time here)
      btn_yesno_yes_img.frameNStart = frameN;  // exact frame index
      
      btn_yesno_yes_img.setAutoDraw(true);
    }
    
    
    // if btn_yesno_yes_img is active this frame...
    if (btn_yesno_yes_img.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *btn_yesno_no_img* updates
    if (t >= 0.0 && btn_yesno_no_img.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      btn_yesno_no_img.tStart = t;  // (not accounting for frame time here)
      btn_yesno_no_img.frameNStart = frameN;  // exact frame index
      
      btn_yesno_no_img.setAutoDraw(true);
    }
    
    
    // if btn_yesno_no_img is active this frame...
    if (btn_yesno_no_img.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *trial_yesno_response* updates
    if (t >= 0.0 && trial_yesno_response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial_yesno_response.tStart = t;  // (not accounting for frame time here)
      trial_yesno_response.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { trial_yesno_response.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { trial_yesno_response.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { trial_yesno_response.clearEvents(); });
    }
    
    // if trial_yesno_response is active this frame...
    if (trial_yesno_response.status === PsychoJS.Status.STARTED) {
      let theseKeys = trial_yesno_response.getKeys({
        keyList: typeof ['left','right'] === 'string' ? [['left','right']] : ['left','right'], 
        waitRelease: false
      });
      _trial_yesno_response_allKeys = _trial_yesno_response_allKeys.concat(theseKeys);
      if (_trial_yesno_response_allKeys.length > 0) {
        trial_yesno_response.keys = _trial_yesno_response_allKeys[_trial_yesno_response_allKeys.length - 1].name;  // just the last key pressed
        trial_yesno_response.rt = _trial_yesno_response_allKeys[_trial_yesno_response_allKeys.length - 1].rt;
        trial_yesno_response.duration = _trial_yesno_response_allKeys[_trial_yesno_response_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // *click_yesno_mouse* updates
    if (t >= 0.0 && click_yesno_mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      click_yesno_mouse.tStart = t;  // (not accounting for frame time here)
      click_yesno_mouse.frameNStart = frameN;  // exact frame index
      
      click_yesno_mouse.status = PsychoJS.Status.STARTED;
      click_yesno_mouse.mouseClock.reset();
      prevButtonState = click_yesno_mouse.getPressed();  // if button is down already this ISN'T a new click
    }
    
    // if click_yesno_mouse is active this frame...
    if (click_yesno_mouse.status === PsychoJS.Status.STARTED) {
      _mouseButtons = click_yesno_mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          click_yesno_mouse.clickableObjects = eval([btn_yesno_yes_img, btn_yesno_no_img])
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(click_yesno_mouse.clickableObjects)) {
              click_yesno_mouse.clickableObjects = [click_yesno_mouse.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of click_yesno_mouse.clickableObjects) {
              if (obj.contains(click_yesno_mouse)) {
                  gotValidClick = true;
                  click_yesno_mouse.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              click_yesno_mouse.clicked_name.push(null);
          }
          _mouseXYs = click_yesno_mouse.getPos();
          click_yesno_mouse.x.push(_mouseXYs[0]);
          click_yesno_mouse.y.push(_mouseXYs[1]);
          click_yesno_mouse.leftButton.push(_mouseButtons[0]);
          click_yesno_mouse.midButton.push(_mouseButtons[1]);
          click_yesno_mouse.rightButton.push(_mouseButtons[2]);
          click_yesno_mouse.time.push(click_yesno_mouse.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    training_yesno_responseComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function training_yesno_responseRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'training_yesno_response' ---
    training_yesno_responseComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('training_yesno_response.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(trial_yesno_response.corr, level);
    }
    psychoJS.experiment.addData('trial_yesno_response.keys', trial_yesno_response.keys);
    if (typeof trial_yesno_response.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('trial_yesno_response.rt', trial_yesno_response.rt);
        psychoJS.experiment.addData('trial_yesno_response.duration', trial_yesno_response.duration);
        routineTimer.reset();
        }
    
    trial_yesno_response.stop();
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('click_yesno_mouse.x', click_yesno_mouse.x);
    psychoJS.experiment.addData('click_yesno_mouse.y', click_yesno_mouse.y);
    psychoJS.experiment.addData('click_yesno_mouse.leftButton', click_yesno_mouse.leftButton);
    psychoJS.experiment.addData('click_yesno_mouse.midButton', click_yesno_mouse.midButton);
    psychoJS.experiment.addData('click_yesno_mouse.rightButton', click_yesno_mouse.rightButton);
    psychoJS.experiment.addData('click_yesno_mouse.time', click_yesno_mouse.time);
    psychoJS.experiment.addData('click_yesno_mouse.clicked_name', click_yesno_mouse.clicked_name);
    
    // Run 'End Routine' code from training_yesno_button_placement
    // Get the last key pressed (handles list vs single value)
    let _lastKey = null;
    if (trial_yesno_response.keys !== undefined && trial_yesno_response.keys !== null) {
        if (Array.isArray(trial_yesno_response.keys)) {
            _lastKey = trial_yesno_response.keys[trial_yesno_response.keys.length - 1];
        } else {
            _lastKey = trial_yesno_response.keys;
        }
    }
    
    // Detect button click
    let _yesButtonClicked = false;
    
    // Check mouse clicks every frame
    if (typeof click_yesno_mouse !== 'undefined') {
        if (click_yesno_mouse.clicked_name !== undefined && click_yesno_mouse.clicked_name !== null) {
            if (click_yesno_mouse.clicked_name.includes('btn_yesno_yes_img')) {
                _yesButtonClicked = true;
            }
        }
    }
    
    // Final condition: Yes = keyboard OR button
    needTextInput = (
        _lastKey === 'y' ||
        _lastKey === 'right' ||
        _yesButtonClicked
    );
    // the Routine "training_yesno_response" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function training_written_responseRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'training_written_response' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    training_written_responseClock.reset();
    routineTimer.reset();
    training_written_responseMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_whatconc
    // If the previous response wasn't 'y' or 'left', skip this routine
    if (!needTextInput) {
        continueRoutine = false;
    }
    
    defaultText = previousText[concept] || "";
    textbox_response_training.setText('');
    textbox_response_training.refresh();
    textbox_response_training.setText(defaultText);
    // setup some python lists for storing info about the click_written_mouse
    // current position of the mouse:
    click_written_mouse.x = [];
    click_written_mouse.y = [];
    click_written_mouse.leftButton = [];
    click_written_mouse.midButton = [];
    click_written_mouse.rightButton = [];
    click_written_mouse.time = [];
    click_written_mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('training_written_response.started', globalClock.getTime());
    training_written_responseMaxDuration = null
    // keep track of which components have finished
    training_written_responseComponents = [];
    training_written_responseComponents.push(bg_trial_written);
    training_written_responseComponents.push(textbox_response_training);
    training_written_responseComponents.push(click_written_mouse);
    training_written_responseComponents.push(btn_written_img);
    
    training_written_responseComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function training_written_responseRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'training_written_response' ---
    // get current time
    t = training_written_responseClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *bg_trial_written* updates
    if (t >= 0.0 && bg_trial_written.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bg_trial_written.tStart = t;  // (not accounting for frame time here)
      bg_trial_written.frameNStart = frameN;  // exact frame index
      
      bg_trial_written.setAutoDraw(true);
    }
    
    
    // if bg_trial_written is active this frame...
    if (bg_trial_written.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *textbox_response_training* updates
    if (t >= 0.0 && textbox_response_training.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_response_training.tStart = t;  // (not accounting for frame time here)
      textbox_response_training.frameNStart = frameN;  // exact frame index
      
      textbox_response_training.setAutoDraw(true);
    }
    
    
    // if textbox_response_training is active this frame...
    if (textbox_response_training.status === PsychoJS.Status.STARTED) {
    }
    
    // *click_written_mouse* updates
    if (t >= 0.0 && click_written_mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      click_written_mouse.tStart = t;  // (not accounting for frame time here)
      click_written_mouse.frameNStart = frameN;  // exact frame index
      
      click_written_mouse.status = PsychoJS.Status.STARTED;
      click_written_mouse.mouseClock.reset();
      prevButtonState = click_written_mouse.getPressed();  // if button is down already this ISN'T a new click
    }
    
    // if click_written_mouse is active this frame...
    if (click_written_mouse.status === PsychoJS.Status.STARTED) {
      _mouseButtons = click_written_mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          click_written_mouse.clickableObjects = eval(btn_written_img)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(click_written_mouse.clickableObjects)) {
              click_written_mouse.clickableObjects = [click_written_mouse.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of click_written_mouse.clickableObjects) {
              if (obj.contains(click_written_mouse)) {
                  gotValidClick = true;
                  click_written_mouse.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              click_written_mouse.clicked_name.push(null);
          }
          _mouseXYs = click_written_mouse.getPos();
          click_written_mouse.x.push(_mouseXYs[0]);
          click_written_mouse.y.push(_mouseXYs[1]);
          click_written_mouse.leftButton.push(_mouseButtons[0]);
          click_written_mouse.midButton.push(_mouseButtons[1]);
          click_written_mouse.rightButton.push(_mouseButtons[2]);
          click_written_mouse.time.push(click_written_mouse.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *btn_written_img* updates
    if (t >= 0.0 && btn_written_img.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      btn_written_img.tStart = t;  // (not accounting for frame time here)
      btn_written_img.frameNStart = frameN;  // exact frame index
      
      btn_written_img.setAutoDraw(true);
    }
    
    
    // if btn_written_img is active this frame...
    if (btn_written_img.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    training_written_responseComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function training_written_responseRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'training_written_response' ---
    training_written_responseComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('training_written_response.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_whatconc
    previousText[concept] = textbox_response_training.text;
    psychoJS.experiment.addData('textbox_response_training.text',textbox_response_training.text)
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('click_written_mouse.x', click_written_mouse.x);
    psychoJS.experiment.addData('click_written_mouse.y', click_written_mouse.y);
    psychoJS.experiment.addData('click_written_mouse.leftButton', click_written_mouse.leftButton);
    psychoJS.experiment.addData('click_written_mouse.midButton', click_written_mouse.midButton);
    psychoJS.experiment.addData('click_written_mouse.rightButton', click_written_mouse.rightButton);
    psychoJS.experiment.addData('click_written_mouse.time', click_written_mouse.time);
    psychoJS.experiment.addData('click_written_mouse.clicked_name', click_written_mouse.clicked_name);
    
    // Run 'End Routine' code from written_button_placement
    // Default
    showFeedback = false;
    
    // Use your loop's actual name here:
    const loop = training_loop;
    
    // If this is the very last trial of the loop → show feedback
    if (loop.thisN === (loop.nTotal - 1)) {
      showFeedback = true;
    } else {
      // Try to read the next row's concept
      const nextRow = loop.trialList[loop.thisN + 1];
    
      if (nextRow && nextRow['concept'] !== undefined) {
        if (nextRow['concept'] !== concept) {
          showFeedback = true;
        }
      } else {
        // Safety: if next row isn't readable, treat as a boundary
        showFeedback = true;
      }
    }
    // the Routine "training_written_response" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function training_feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'training_feedback' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    training_feedbackClock.reset();
    routineTimer.reset();
    training_feedbackMaxDurationReached = false;
    // update component parameters for each repeat
    // setup some python lists for storing info about the click_feedback_mouse
    // current position of the mouse:
    click_feedback_mouse.x = [];
    click_feedback_mouse.y = [];
    click_feedback_mouse.leftButton = [];
    click_feedback_mouse.midButton = [];
    click_feedback_mouse.rightButton = [];
    click_feedback_mouse.time = [];
    click_feedback_mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    feedback_concept.setText(concept);
    psychoJS.experiment.addData('training_feedback.started', globalClock.getTime());
    // skip this Routine if its 'Skip if' condition is True
    continueRoutine = continueRoutine && !((! showFeedback));
    maxDurationReached = false
    training_feedbackMaxDuration = 3
    // keep track of which components have finished
    training_feedbackComponents = [];
    training_feedbackComponents.push(bg_feedback_train);
    training_feedbackComponents.push(btn_feedback_img);
    training_feedbackComponents.push(click_feedback_mouse);
    training_feedbackComponents.push(feedback_concept);
    
    training_feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function training_feedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'training_feedback' ---
    // get current time
    t = training_feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // is it time to end the Routine? (based on local clock)
    if (t > training_feedbackMaxDuration) {
        training_feedbackMaxDurationReached = true
        continueRoutine = false
    }
    
    // *bg_feedback_train* updates
    if (t >= 0.0 && bg_feedback_train.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bg_feedback_train.tStart = t;  // (not accounting for frame time here)
      bg_feedback_train.frameNStart = frameN;  // exact frame index
      
      bg_feedback_train.setAutoDraw(true);
    }
    
    
    // if bg_feedback_train is active this frame...
    if (bg_feedback_train.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *btn_feedback_img* updates
    if (t >= 0.0 && btn_feedback_img.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      btn_feedback_img.tStart = t;  // (not accounting for frame time here)
      btn_feedback_img.frameNStart = frameN;  // exact frame index
      
      btn_feedback_img.setAutoDraw(true);
    }
    
    
    // if btn_feedback_img is active this frame...
    if (btn_feedback_img.status === PsychoJS.Status.STARTED) {
    }
    
    // *click_feedback_mouse* updates
    if (t >= 0.0 && click_feedback_mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      click_feedback_mouse.tStart = t;  // (not accounting for frame time here)
      click_feedback_mouse.frameNStart = frameN;  // exact frame index
      
      click_feedback_mouse.status = PsychoJS.Status.STARTED;
      click_feedback_mouse.mouseClock.reset();
      prevButtonState = click_feedback_mouse.getPressed();  // if button is down already this ISN'T a new click
    }
    
    // if click_feedback_mouse is active this frame...
    if (click_feedback_mouse.status === PsychoJS.Status.STARTED) {
      _mouseButtons = click_feedback_mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          click_feedback_mouse.clickableObjects = eval(btn_feedback_img)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(click_feedback_mouse.clickableObjects)) {
              click_feedback_mouse.clickableObjects = [click_feedback_mouse.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of click_feedback_mouse.clickableObjects) {
              if (obj.contains(click_feedback_mouse)) {
                  gotValidClick = true;
                  click_feedback_mouse.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              click_feedback_mouse.clicked_name.push(null);
          }
          _mouseXYs = click_feedback_mouse.getPos();
          click_feedback_mouse.x.push(_mouseXYs[0]);
          click_feedback_mouse.y.push(_mouseXYs[1]);
          click_feedback_mouse.leftButton.push(_mouseButtons[0]);
          click_feedback_mouse.midButton.push(_mouseButtons[1]);
          click_feedback_mouse.rightButton.push(_mouseButtons[2]);
          click_feedback_mouse.time.push(click_feedback_mouse.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *feedback_concept* updates
    if (t >= 0.0 && feedback_concept.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_concept.tStart = t;  // (not accounting for frame time here)
      feedback_concept.frameNStart = frameN;  // exact frame index
      
      feedback_concept.setAutoDraw(true);
    }
    
    
    // if feedback_concept is active this frame...
    if (feedback_concept.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    training_feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function training_feedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'training_feedback' ---
    training_feedbackComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('training_feedback.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('click_feedback_mouse.x', click_feedback_mouse.x);
    psychoJS.experiment.addData('click_feedback_mouse.y', click_feedback_mouse.y);
    psychoJS.experiment.addData('click_feedback_mouse.leftButton', click_feedback_mouse.leftButton);
    psychoJS.experiment.addData('click_feedback_mouse.midButton', click_feedback_mouse.midButton);
    psychoJS.experiment.addData('click_feedback_mouse.rightButton', click_feedback_mouse.rightButton);
    psychoJS.experiment.addData('click_feedback_mouse.time', click_feedback_mouse.time);
    psychoJS.experiment.addData('click_feedback_mouse.clicked_name', click_feedback_mouse.clicked_name);
    
    // the Routine "training_feedback" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function main_start_screenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'main_start_screen' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    main_start_screenClock.reset();
    routineTimer.reset();
    main_start_screenMaxDurationReached = false;
    // update component parameters for each repeat
    // setup some python lists for storing info about the click_mainstart_mouse
    // current position of the mouse:
    click_mainstart_mouse.x = [];
    click_mainstart_mouse.y = [];
    click_mainstart_mouse.leftButton = [];
    click_mainstart_mouse.midButton = [];
    click_mainstart_mouse.rightButton = [];
    click_mainstart_mouse.time = [];
    click_mainstart_mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('main_start_screen.started', globalClock.getTime());
    main_start_screenMaxDuration = null
    // keep track of which components have finished
    main_start_screenComponents = [];
    main_start_screenComponents.push(bg_mainstart_img);
    main_start_screenComponents.push(btn_mainstart_img);
    main_start_screenComponents.push(click_mainstart_mouse);
    
    main_start_screenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function main_start_screenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'main_start_screen' ---
    // get current time
    t = main_start_screenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *bg_mainstart_img* updates
    if (t >= 0.0 && bg_mainstart_img.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bg_mainstart_img.tStart = t;  // (not accounting for frame time here)
      bg_mainstart_img.frameNStart = frameN;  // exact frame index
      
      bg_mainstart_img.setAutoDraw(true);
    }
    
    
    // if bg_mainstart_img is active this frame...
    if (bg_mainstart_img.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *btn_mainstart_img* updates
    if (t >= 0.0 && btn_mainstart_img.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      btn_mainstart_img.tStart = t;  // (not accounting for frame time here)
      btn_mainstart_img.frameNStart = frameN;  // exact frame index
      
      btn_mainstart_img.setAutoDraw(true);
    }
    
    
    // if btn_mainstart_img is active this frame...
    if (btn_mainstart_img.status === PsychoJS.Status.STARTED) {
    }
    
    // *click_mainstart_mouse* updates
    if (t >= 0.0 && click_mainstart_mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      click_mainstart_mouse.tStart = t;  // (not accounting for frame time here)
      click_mainstart_mouse.frameNStart = frameN;  // exact frame index
      
      click_mainstart_mouse.status = PsychoJS.Status.STARTED;
      click_mainstart_mouse.mouseClock.reset();
      prevButtonState = click_mainstart_mouse.getPressed();  // if button is down already this ISN'T a new click
    }
    
    // if click_mainstart_mouse is active this frame...
    if (click_mainstart_mouse.status === PsychoJS.Status.STARTED) {
      _mouseButtons = click_mainstart_mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          click_mainstart_mouse.clickableObjects = eval(btn_mainstart_img)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(click_mainstart_mouse.clickableObjects)) {
              click_mainstart_mouse.clickableObjects = [click_mainstart_mouse.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of click_mainstart_mouse.clickableObjects) {
              if (obj.contains(click_mainstart_mouse)) {
                  gotValidClick = true;
                  click_mainstart_mouse.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              click_mainstart_mouse.clicked_name.push(null);
          }
          _mouseXYs = click_mainstart_mouse.getPos();
          click_mainstart_mouse.x.push(_mouseXYs[0]);
          click_mainstart_mouse.y.push(_mouseXYs[1]);
          click_mainstart_mouse.leftButton.push(_mouseButtons[0]);
          click_mainstart_mouse.midButton.push(_mouseButtons[1]);
          click_mainstart_mouse.rightButton.push(_mouseButtons[2]);
          click_mainstart_mouse.time.push(click_mainstart_mouse.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    main_start_screenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function main_start_screenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'main_start_screen' ---
    main_start_screenComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('main_start_screen.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('click_mainstart_mouse.x', click_mainstart_mouse.x);
    psychoJS.experiment.addData('click_mainstart_mouse.y', click_mainstart_mouse.y);
    psychoJS.experiment.addData('click_mainstart_mouse.leftButton', click_mainstart_mouse.leftButton);
    psychoJS.experiment.addData('click_mainstart_mouse.midButton', click_mainstart_mouse.midButton);
    psychoJS.experiment.addData('click_mainstart_mouse.rightButton', click_mainstart_mouse.rightButton);
    psychoJS.experiment.addData('click_mainstart_mouse.time', click_mainstart_mouse.time);
    psychoJS.experiment.addData('click_mainstart_mouse.clicked_name', click_mainstart_mouse.clicked_name);
    
    // the Routine "main_start_screen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function main_stimulus_presentationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'main_stimulus_presentation' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    main_stimulus_presentationClock.reset();
    routineTimer.reset();
    main_stimulus_presentationMaxDurationReached = false;
    // update component parameters for each repeat
    stimulus_presentation_main.setImage(stimulus);
    psychoJS.experiment.addData('main_stimulus_presentation.started', globalClock.getTime());
    main_stimulus_presentationMaxDuration = Number.parseFloat(expInfo["stimPresTime"])
    // keep track of which components have finished
    main_stimulus_presentationComponents = [];
    main_stimulus_presentationComponents.push(bg_main_stimpres);
    main_stimulus_presentationComponents.push(stimulus_presentation_main);
    
    main_stimulus_presentationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function main_stimulus_presentationRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'main_stimulus_presentation' ---
    // get current time
    t = main_stimulus_presentationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // is it time to end the Routine? (based on local clock)
    if (t > main_stimulus_presentationMaxDuration) {
        main_stimulus_presentationMaxDurationReached = true
        continueRoutine = false
    }
    
    // *bg_main_stimpres* updates
    if (t >= 0.0 && bg_main_stimpres.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bg_main_stimpres.tStart = t;  // (not accounting for frame time here)
      bg_main_stimpres.frameNStart = frameN;  // exact frame index
      
      bg_main_stimpres.setAutoDraw(true);
    }
    
    
    // if bg_main_stimpres is active this frame...
    if (bg_main_stimpres.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *stimulus_presentation_main* updates
    if (t >= 0.0 && stimulus_presentation_main.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stimulus_presentation_main.tStart = t;  // (not accounting for frame time here)
      stimulus_presentation_main.frameNStart = frameN;  // exact frame index
      
      stimulus_presentation_main.setAutoDraw(true);
    }
    
    
    // if stimulus_presentation_main is active this frame...
    if (stimulus_presentation_main.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    main_stimulus_presentationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function main_stimulus_presentationRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'main_stimulus_presentation' ---
    main_stimulus_presentationComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('main_stimulus_presentation.stopped', globalClock.getTime());
    // the Routine "main_stimulus_presentation" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function main_yesno_responseRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'main_yesno_response' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    main_yesno_responseClock.reset();
    routineTimer.reset();
    main_yesno_responseMaxDurationReached = false;
    // update component parameters for each repeat
    main_yesno_key_response.keys = undefined;
    main_yesno_key_response.rt = undefined;
    _main_yesno_key_response_allKeys = [];
    // setup some python lists for storing info about the main_yesno_mouse
    // current position of the mouse:
    main_yesno_mouse.x = [];
    main_yesno_mouse.y = [];
    main_yesno_mouse.leftButton = [];
    main_yesno_mouse.midButton = [];
    main_yesno_mouse.rightButton = [];
    main_yesno_mouse.time = [];
    main_yesno_mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('main_yesno_response.started', globalClock.getTime());
    main_yesno_responseMaxDuration = null
    // keep track of which components have finished
    main_yesno_responseComponents = [];
    main_yesno_responseComponents.push(bg_main_yesno);
    main_yesno_responseComponents.push(btn_yesno_yes_main);
    main_yesno_responseComponents.push(btn_yesno_no_main);
    main_yesno_responseComponents.push(main_yesno_key_response);
    main_yesno_responseComponents.push(main_yesno_mouse);
    
    main_yesno_responseComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function main_yesno_responseRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'main_yesno_response' ---
    // get current time
    t = main_yesno_responseClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *bg_main_yesno* updates
    if (t >= 0.0 && bg_main_yesno.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bg_main_yesno.tStart = t;  // (not accounting for frame time here)
      bg_main_yesno.frameNStart = frameN;  // exact frame index
      
      bg_main_yesno.setAutoDraw(true);
    }
    
    
    // if bg_main_yesno is active this frame...
    if (bg_main_yesno.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *btn_yesno_yes_main* updates
    if (t >= 0.0 && btn_yesno_yes_main.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      btn_yesno_yes_main.tStart = t;  // (not accounting for frame time here)
      btn_yesno_yes_main.frameNStart = frameN;  // exact frame index
      
      btn_yesno_yes_main.setAutoDraw(true);
    }
    
    
    // if btn_yesno_yes_main is active this frame...
    if (btn_yesno_yes_main.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *btn_yesno_no_main* updates
    if (t >= 0.0 && btn_yesno_no_main.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      btn_yesno_no_main.tStart = t;  // (not accounting for frame time here)
      btn_yesno_no_main.frameNStart = frameN;  // exact frame index
      
      btn_yesno_no_main.setAutoDraw(true);
    }
    
    
    // if btn_yesno_no_main is active this frame...
    if (btn_yesno_no_main.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *main_yesno_key_response* updates
    if (t >= 0.0 && main_yesno_key_response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      main_yesno_key_response.tStart = t;  // (not accounting for frame time here)
      main_yesno_key_response.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { main_yesno_key_response.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { main_yesno_key_response.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { main_yesno_key_response.clearEvents(); });
    }
    
    // if main_yesno_key_response is active this frame...
    if (main_yesno_key_response.status === PsychoJS.Status.STARTED) {
      let theseKeys = main_yesno_key_response.getKeys({
        keyList: typeof ['left','right'] === 'string' ? [['left','right']] : ['left','right'], 
        waitRelease: false
      });
      _main_yesno_key_response_allKeys = _main_yesno_key_response_allKeys.concat(theseKeys);
      if (_main_yesno_key_response_allKeys.length > 0) {
        main_yesno_key_response.keys = _main_yesno_key_response_allKeys[_main_yesno_key_response_allKeys.length - 1].name;  // just the last key pressed
        main_yesno_key_response.rt = _main_yesno_key_response_allKeys[_main_yesno_key_response_allKeys.length - 1].rt;
        main_yesno_key_response.duration = _main_yesno_key_response_allKeys[_main_yesno_key_response_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // *main_yesno_mouse* updates
    if (t >= 0.0 && main_yesno_mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      main_yesno_mouse.tStart = t;  // (not accounting for frame time here)
      main_yesno_mouse.frameNStart = frameN;  // exact frame index
      
      main_yesno_mouse.status = PsychoJS.Status.STARTED;
      main_yesno_mouse.mouseClock.reset();
      prevButtonState = main_yesno_mouse.getPressed();  // if button is down already this ISN'T a new click
    }
    
    // if main_yesno_mouse is active this frame...
    if (main_yesno_mouse.status === PsychoJS.Status.STARTED) {
      _mouseButtons = main_yesno_mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          main_yesno_mouse.clickableObjects = eval([btn_yesno_yes_main, btn_yesno_no_main])
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(main_yesno_mouse.clickableObjects)) {
              main_yesno_mouse.clickableObjects = [main_yesno_mouse.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of main_yesno_mouse.clickableObjects) {
              if (obj.contains(main_yesno_mouse)) {
                  gotValidClick = true;
                  main_yesno_mouse.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              main_yesno_mouse.clicked_name.push(null);
          }
          _mouseXYs = main_yesno_mouse.getPos();
          main_yesno_mouse.x.push(_mouseXYs[0]);
          main_yesno_mouse.y.push(_mouseXYs[1]);
          main_yesno_mouse.leftButton.push(_mouseButtons[0]);
          main_yesno_mouse.midButton.push(_mouseButtons[1]);
          main_yesno_mouse.rightButton.push(_mouseButtons[2]);
          main_yesno_mouse.time.push(main_yesno_mouse.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    main_yesno_responseComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function main_yesno_responseRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'main_yesno_response' ---
    main_yesno_responseComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('main_yesno_response.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(main_yesno_key_response.corr, level);
    }
    psychoJS.experiment.addData('main_yesno_key_response.keys', main_yesno_key_response.keys);
    if (typeof main_yesno_key_response.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('main_yesno_key_response.rt', main_yesno_key_response.rt);
        psychoJS.experiment.addData('main_yesno_key_response.duration', main_yesno_key_response.duration);
        routineTimer.reset();
        }
    
    main_yesno_key_response.stop();
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('main_yesno_mouse.x', main_yesno_mouse.x);
    psychoJS.experiment.addData('main_yesno_mouse.y', main_yesno_mouse.y);
    psychoJS.experiment.addData('main_yesno_mouse.leftButton', main_yesno_mouse.leftButton);
    psychoJS.experiment.addData('main_yesno_mouse.midButton', main_yesno_mouse.midButton);
    psychoJS.experiment.addData('main_yesno_mouse.rightButton', main_yesno_mouse.rightButton);
    psychoJS.experiment.addData('main_yesno_mouse.time', main_yesno_mouse.time);
    psychoJS.experiment.addData('main_yesno_mouse.clicked_name', main_yesno_mouse.clicked_name);
    
    // Run 'End Routine' code from main_yesno_button_placement
    // Get the last key pressed (handles list vs single value)
    let _lastKey = null;
    if (main_yesno_key_response.keys !== undefined && main_yesno_key_response.keys !== null) {
        if (Array.isArray(main_yesno_key_response.keys)) {
            _lastKey = main_yesno_key_response.keys[main_yesno_key_response.keys.length - 1];
        } else {
            _lastKey = main_yesno_key_response.keys;
        }
    }
    
    // Detect button click
    let _yesButtonClicked = false;
    
    // Check mouse clicks every frame
    if (typeof main_yesno_mouse !== 'undefined') {
        if (main_yesno_mouse.clicked_name !== undefined && main_yesno_mouse.clicked_name !== null) {
            if (main_yesno_mouse.clicked_name.includes('btn_yesno_yes_img')) {
                _yesButtonClicked = true;
            }
        }
    }
    
    // Final condition: Yes = keyboard OR button
    needTextInput = (
        _lastKey === 'y' ||
        _lastKey === 'right' ||
        _yesButtonClicked
    );
    // the Routine "main_yesno_response" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function main_written_responseRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'main_written_response' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    main_written_responseClock.reset();
    routineTimer.reset();
    main_written_responseMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_whatconc_main
    // If the previous response wasn't 'y' or 'left', skip this routine
    if (!needTextInput) {
        continueRoutine = false;
    }
    
    defaultText = previousText[concept] || "";
    textbox_response_main.setText('');
    textbox_response_main.refresh();
    textbox_response_main.setText(defaultText);
    // setup some python lists for storing info about the main_written_mouse
    // current position of the mouse:
    main_written_mouse.x = [];
    main_written_mouse.y = [];
    main_written_mouse.leftButton = [];
    main_written_mouse.midButton = [];
    main_written_mouse.rightButton = [];
    main_written_mouse.time = [];
    main_written_mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('main_written_response.started', globalClock.getTime());
    main_written_responseMaxDuration = null
    // keep track of which components have finished
    main_written_responseComponents = [];
    main_written_responseComponents.push(bg_main_written);
    main_written_responseComponents.push(textbox_response_main);
    main_written_responseComponents.push(main_written_mouse);
    main_written_responseComponents.push(btn_written_main);
    
    main_written_responseComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function main_written_responseRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'main_written_response' ---
    // get current time
    t = main_written_responseClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *bg_main_written* updates
    if (t >= 0.0 && bg_main_written.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bg_main_written.tStart = t;  // (not accounting for frame time here)
      bg_main_written.frameNStart = frameN;  // exact frame index
      
      bg_main_written.setAutoDraw(true);
    }
    
    
    // if bg_main_written is active this frame...
    if (bg_main_written.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *textbox_response_main* updates
    if (t >= 0.0 && textbox_response_main.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_response_main.tStart = t;  // (not accounting for frame time here)
      textbox_response_main.frameNStart = frameN;  // exact frame index
      
      textbox_response_main.setAutoDraw(true);
    }
    
    
    // if textbox_response_main is active this frame...
    if (textbox_response_main.status === PsychoJS.Status.STARTED) {
    }
    
    // *main_written_mouse* updates
    if (t >= 0.0 && main_written_mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      main_written_mouse.tStart = t;  // (not accounting for frame time here)
      main_written_mouse.frameNStart = frameN;  // exact frame index
      
      main_written_mouse.status = PsychoJS.Status.STARTED;
      main_written_mouse.mouseClock.reset();
      prevButtonState = main_written_mouse.getPressed();  // if button is down already this ISN'T a new click
    }
    
    // if main_written_mouse is active this frame...
    if (main_written_mouse.status === PsychoJS.Status.STARTED) {
      _mouseButtons = main_written_mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          main_written_mouse.clickableObjects = eval(btn_written_main)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(main_written_mouse.clickableObjects)) {
              main_written_mouse.clickableObjects = [main_written_mouse.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of main_written_mouse.clickableObjects) {
              if (obj.contains(main_written_mouse)) {
                  gotValidClick = true;
                  main_written_mouse.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              main_written_mouse.clicked_name.push(null);
          }
          _mouseXYs = main_written_mouse.getPos();
          main_written_mouse.x.push(_mouseXYs[0]);
          main_written_mouse.y.push(_mouseXYs[1]);
          main_written_mouse.leftButton.push(_mouseButtons[0]);
          main_written_mouse.midButton.push(_mouseButtons[1]);
          main_written_mouse.rightButton.push(_mouseButtons[2]);
          main_written_mouse.time.push(main_written_mouse.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *btn_written_main* updates
    if (t >= 0.0 && btn_written_main.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      btn_written_main.tStart = t;  // (not accounting for frame time here)
      btn_written_main.frameNStart = frameN;  // exact frame index
      
      btn_written_main.setAutoDraw(true);
    }
    
    
    // if btn_written_main is active this frame...
    if (btn_written_main.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    main_written_responseComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function main_written_responseRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'main_written_response' ---
    main_written_responseComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('main_written_response.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_whatconc_main
    previousText[concept] = textbox_response_main.text;
    psychoJS.experiment.addData('textbox_response_main.text',textbox_response_main.text)
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('main_written_mouse.x', main_written_mouse.x);
    psychoJS.experiment.addData('main_written_mouse.y', main_written_mouse.y);
    psychoJS.experiment.addData('main_written_mouse.leftButton', main_written_mouse.leftButton);
    psychoJS.experiment.addData('main_written_mouse.midButton', main_written_mouse.midButton);
    psychoJS.experiment.addData('main_written_mouse.rightButton', main_written_mouse.rightButton);
    psychoJS.experiment.addData('main_written_mouse.time', main_written_mouse.time);
    psychoJS.experiment.addData('main_written_mouse.clicked_name', main_written_mouse.clicked_name);
    
    // Run 'End Routine' code from written_button_placement_main
    // Default
    showFeedback = false;
    
    // Use your loop's actual name here:
    const loop = main_loop;
    
    // If this is the very last trial of the loop → show feedback
    if (loop.thisN === (loop.nTotal - 1)) {
      showFeedback = true;
    } else {
      // Try to read the next row's concept
      const nextRow = loop.trialList[loop.thisN + 1];
    
      if (nextRow && nextRow['concept'] !== undefined) {
        if (nextRow['concept'] !== concept) {
          showFeedback = true;
        }
      } else {
        // Safety: if next row isn't readable, treat as a boundary
        showFeedback = true;
      }
    }
    // the Routine "main_written_response" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function main_feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'main_feedback' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    main_feedbackClock.reset();
    routineTimer.reset();
    main_feedbackMaxDurationReached = false;
    // update component parameters for each repeat
    // setup some python lists for storing info about the main_feedback_mouse
    // current position of the mouse:
    main_feedback_mouse.x = [];
    main_feedback_mouse.y = [];
    main_feedback_mouse.leftButton = [];
    main_feedback_mouse.midButton = [];
    main_feedback_mouse.rightButton = [];
    main_feedback_mouse.time = [];
    main_feedback_mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    feedback_concept_main.setText(concept);
    psychoJS.experiment.addData('main_feedback.started', globalClock.getTime());
    // skip this Routine if its 'Skip if' condition is True
    continueRoutine = continueRoutine && !((! showFeedback));
    maxDurationReached = false
    main_feedbackMaxDuration = 3
    // keep track of which components have finished
    main_feedbackComponents = [];
    main_feedbackComponents.push(bg_feedback_main);
    main_feedbackComponents.push(btn_feedback_main);
    main_feedbackComponents.push(main_feedback_mouse);
    main_feedbackComponents.push(feedback_concept_main);
    
    main_feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function main_feedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'main_feedback' ---
    // get current time
    t = main_feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // is it time to end the Routine? (based on local clock)
    if (t > main_feedbackMaxDuration) {
        main_feedbackMaxDurationReached = true
        continueRoutine = false
    }
    
    // *bg_feedback_main* updates
    if (t >= 0.0 && bg_feedback_main.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bg_feedback_main.tStart = t;  // (not accounting for frame time here)
      bg_feedback_main.frameNStart = frameN;  // exact frame index
      
      bg_feedback_main.setAutoDraw(true);
    }
    
    
    // if bg_feedback_main is active this frame...
    if (bg_feedback_main.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *btn_feedback_main* updates
    if (t >= 0.0 && btn_feedback_main.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      btn_feedback_main.tStart = t;  // (not accounting for frame time here)
      btn_feedback_main.frameNStart = frameN;  // exact frame index
      
      btn_feedback_main.setAutoDraw(true);
    }
    
    
    // if btn_feedback_main is active this frame...
    if (btn_feedback_main.status === PsychoJS.Status.STARTED) {
    }
    
    // *main_feedback_mouse* updates
    if (t >= 0.0 && main_feedback_mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      main_feedback_mouse.tStart = t;  // (not accounting for frame time here)
      main_feedback_mouse.frameNStart = frameN;  // exact frame index
      
      main_feedback_mouse.status = PsychoJS.Status.STARTED;
      main_feedback_mouse.mouseClock.reset();
      prevButtonState = main_feedback_mouse.getPressed();  // if button is down already this ISN'T a new click
    }
    
    // if main_feedback_mouse is active this frame...
    if (main_feedback_mouse.status === PsychoJS.Status.STARTED) {
      _mouseButtons = main_feedback_mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          main_feedback_mouse.clickableObjects = eval(btn_feedback_main)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(main_feedback_mouse.clickableObjects)) {
              main_feedback_mouse.clickableObjects = [main_feedback_mouse.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of main_feedback_mouse.clickableObjects) {
              if (obj.contains(main_feedback_mouse)) {
                  gotValidClick = true;
                  main_feedback_mouse.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              main_feedback_mouse.clicked_name.push(null);
          }
          _mouseXYs = main_feedback_mouse.getPos();
          main_feedback_mouse.x.push(_mouseXYs[0]);
          main_feedback_mouse.y.push(_mouseXYs[1]);
          main_feedback_mouse.leftButton.push(_mouseButtons[0]);
          main_feedback_mouse.midButton.push(_mouseButtons[1]);
          main_feedback_mouse.rightButton.push(_mouseButtons[2]);
          main_feedback_mouse.time.push(main_feedback_mouse.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *feedback_concept_main* updates
    if (t >= 0.0 && feedback_concept_main.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_concept_main.tStart = t;  // (not accounting for frame time here)
      feedback_concept_main.frameNStart = frameN;  // exact frame index
      
      feedback_concept_main.setAutoDraw(true);
    }
    
    
    // if feedback_concept_main is active this frame...
    if (feedback_concept_main.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    main_feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function main_feedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'main_feedback' ---
    main_feedbackComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('main_feedback.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('main_feedback_mouse.x', main_feedback_mouse.x);
    psychoJS.experiment.addData('main_feedback_mouse.y', main_feedback_mouse.y);
    psychoJS.experiment.addData('main_feedback_mouse.leftButton', main_feedback_mouse.leftButton);
    psychoJS.experiment.addData('main_feedback_mouse.midButton', main_feedback_mouse.midButton);
    psychoJS.experiment.addData('main_feedback_mouse.rightButton', main_feedback_mouse.rightButton);
    psychoJS.experiment.addData('main_feedback_mouse.time', main_feedback_mouse.time);
    psychoJS.experiment.addData('main_feedback_mouse.clicked_name', main_feedback_mouse.clicked_name);
    
    // the Routine "main_feedback" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'end' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    endClock.reset();
    routineTimer.reset();
    endMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('end.started', globalClock.getTime());
    endMaxDuration = 3.0
    // keep track of which components have finished
    endComponents = [];
    endComponents.push(bg_goodbye_img);
    
    endComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function endRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'end' ---
    // get current time
    t = endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // is it time to end the Routine? (based on local clock)
    if (t > endMaxDuration) {
        endMaxDurationReached = true
        continueRoutine = false
    }
    
    // *bg_goodbye_img* updates
    if (t >= 0.0 && bg_goodbye_img.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bg_goodbye_img.tStart = t;  // (not accounting for frame time here)
      bg_goodbye_img.frameNStart = frameN;  // exact frame index
      
      bg_goodbye_img.setAutoDraw(true);
    }
    
    
    // if bg_goodbye_img is active this frame...
    if (bg_goodbye_img.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    endComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function endRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'end' ---
    endComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('end.stopped', globalClock.getTime());
    // the Routine "end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}

async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
