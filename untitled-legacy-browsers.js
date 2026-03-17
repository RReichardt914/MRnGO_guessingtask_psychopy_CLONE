/***************** 
 * Untitled *
 *****************/


// store info about the experiment session:
let expName = 'untitled';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
    'stimPresTime': '5',
    'taskOrder': '1',
    'listNum': '01',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
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
flowScheduler.add(outer_csv_selectorRoutineBegin());
flowScheduler.add(outer_csv_selectorRoutineEachFrame());
flowScheduler.add(outer_csv_selectorRoutineEnd());
flowScheduler.add(start_screenRoutineBegin());
flowScheduler.add(start_screenRoutineEachFrame());
flowScheduler.add(start_screenRoutineEnd());
flowScheduler.add(welcome_screenRoutineBegin());
flowScheduler.add(welcome_screenRoutineEachFrame());
flowScheduler.add(welcome_screenRoutineEnd());
flowScheduler.add(library_checkRoutineBegin());
flowScheduler.add(library_checkRoutineEachFrame());
flowScheduler.add(library_checkRoutineEnd());
flowScheduler.add(library_entryRoutineBegin());
flowScheduler.add(library_entryRoutineEachFrame());
flowScheduler.add(library_entryRoutineEnd());
flowScheduler.add(library_seenRoutineBegin());
flowScheduler.add(library_seenRoutineEachFrame());
flowScheduler.add(library_seenRoutineEnd());
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
const train_outer_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(train_outer_loopLoopBegin(train_outer_loopLoopScheduler));
flowScheduler.add(train_outer_loopLoopScheduler);
flowScheduler.add(train_outer_loopLoopEnd);










flowScheduler.add(main_start_screenRoutineBegin());
flowScheduler.add(main_start_screenRoutineEachFrame());
flowScheduler.add(main_start_screenRoutineEnd());
const main_outer_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(main_outer_loopLoopBegin(main_outer_loopLoopScheduler));
flowScheduler.add(main_outer_loopLoopScheduler);
flowScheduler.add(main_outer_loopLoopEnd);










flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
flowScheduler.add(binoc_findRoutineBegin());
flowScheduler.add(binoc_findRoutineEachFrame());
flowScheduler.add(binoc_findRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'assets/images/1_Main_Start.jpg', 'path': 'assets/images/1_Main_Start.jpg'},
    {'name': 'assets/button_start.png', 'path': 'assets/button_start.png'},
    {'name': 'assets/images/2_Main_Introduction.jpg', 'path': 'assets/images/2_Main_Introduction.jpg'},
    {'name': 'assets/button_jatsszunk.png', 'path': 'assets/button_jatsszunk.png'},
    {'name': 'assets/sounds/Main_1.wav', 'path': 'assets/sounds/Main_1.wav'},
    {'name': 'assets/images/3_Main_Introduction.jpg', 'path': 'assets/images/3_Main_Introduction.jpg'},
    {'name': 'assets/sounds/Main_2.wav', 'path': 'assets/sounds/Main_2.wav'},
    {'name': 'assets/images/4_Main_Introduction.jpg', 'path': 'assets/images/4_Main_Introduction.jpg'},
    {'name': 'assets/sounds/Main_3.wav', 'path': 'assets/sounds/Main_3.wav'},
    {'name': 'assets/images/22_Main_ALT_Introduction.jpg', 'path': 'assets/images/22_Main_ALT_Introduction.jpg'},
    {'name': 'assets/sounds/Main_2_ALT.wav', 'path': 'assets/sounds/Main_2_ALT.wav'},
    {'name': 'assets/images/5_Main_Instruction.jpg', 'path': 'assets/images/5_Main_Instruction.jpg'},
    {'name': 'assets/sounds/Main_4.wav', 'path': 'assets/sounds/Main_4.wav'},
    {'name': 'assets/images/6_Main_Instruction.jpg', 'path': 'assets/images/6_Main_Instruction.jpg'},
    {'name': 'assets/sounds/Main_5.wav', 'path': 'assets/sounds/Main_5.wav'},
    {'name': 'assets/images/7_Main_Instruction.jpg', 'path': 'assets/images/7_Main_Instruction.jpg'},
    {'name': 'assets/sounds/Main_6.wav', 'path': 'assets/sounds/Main_6.wav'},
    {'name': 'assets/images/8_Main_Practice.jpg', 'path': 'assets/images/8_Main_Practice.jpg'},
    {'name': 'assets/sounds/Main_7.wav', 'path': 'assets/sounds/Main_7.wav'},
    {'name': 'assets/images/9_Main_Practice.jpg', 'path': 'assets/images/9_Main_Practice.jpg'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
    {'name': 'assets/button_igen.png', 'path': 'assets/button_igen.png'},
    {'name': 'assets/button_nem.png', 'path': 'assets/button_nem.png'},
    {'name': 'assets/images/18_Main_Test.jpg', 'path': 'assets/images/18_Main_Test.jpg'},
    {'name': 'assets/sounds/Main_8_b.wav', 'path': 'assets/sounds/Main_8_b.wav'},
    {'name': 'assets/images/13_Main_Practice_Reveal.jpg', 'path': 'assets/images/13_Main_Practice_Reveal.jpg'},
    {'name': 'assets/sounds/Main_8_d.wav', 'path': 'assets/sounds/Main_8_d.wav'},
    {'name': 'assets/images/14_Main_Test.jpg', 'path': 'assets/images/14_Main_Test.jpg'},
    {'name': 'assets/sounds/Main_9.wav', 'path': 'assets/sounds/Main_9.wav'},
    {'name': 'assets/sounds/Main_10_d.wav', 'path': 'assets/sounds/Main_10_d.wav'},
    {'name': 'assets/images/19_Main_Test_Reveal.jpg', 'path': 'assets/images/19_Main_Test_Reveal.jpg'},
    {'name': 'assets/images/20_Main_Goodbye.jpg', 'path': 'assets/images/20_Main_Goodbye.jpg'},
    {'name': 'assets/sounds/Main_11.wav', 'path': 'assets/sounds/Main_11.wav'},
    {'name': 'assets/images/21_Main_ALT_LeadtoMIC.jpg', 'path': 'assets/images/21_Main_ALT_LeadtoMIC.jpg'},
    {'name': 'assets/sounds/Main_12.wav', 'path': 'assets/sounds/Main_12.wav'},
    {'name': 'sequences/v13/v13_listA.csv', 'path': 'sequences/v13/v13_listA.csv'},
    {'name': 'sequences/v13/v13_listB.csv', 'path': 'sequences/v13/v13_listB.csv'},
    {'name': 'sequences/v13/v13_listC.csv', 'path': 'sequences/v13/v13_listC.csv'},
    {'name': 'sequences/v13/v13_listD.csv', 'path': 'sequences/v13/v13_listD.csv'},
    {'name': 'sequences/v13/v13_listE.csv', 'path': 'sequences/v13/v13_listE.csv'},
    {'name': 'sequences/a16/a16_listA.csv', 'path': 'sequences/a16/a16_listA.csv'},
    {'name': 'sequences/a16/a16_listB.csv', 'path': 'sequences/a16/a16_listB.csv'},
    {'name': 'sequences/a16/a16_listC.csv', 'path': 'sequences/a16/a16_listC.csv'},
    {'name': 'sequences/a16/a16_listD.csv', 'path': 'sequences/a16/a16_listD.csv'},
    {'name': 'sequences/a16/a16_listE.csv', 'path': 'sequences/a16/a16_listE.csv'},
    {'name': 'sequences/a05/a05_listA.csv', 'path': 'sequences/a05/a05_listA.csv'},
    {'name': 'sequences/a05/a05_listB.csv', 'path': 'sequences/a05/a05_listB.csv'},
    {'name': 'sequences/a05/a05_listC.csv', 'path': 'sequences/a05/a05_listC.csv'},
    {'name': 'sequences/a05/a05_listD.csv', 'path': 'sequences/a05/a05_listD.csv'},
    {'name': 'sequences/a05/a05_listE.csv', 'path': 'sequences/a05/a05_listE.csv'},
    {'name': 'stimuli/f00022.png', 'path': 'stimuli/f00022.png'},
    {'name': 'stimuli/f00047.png', 'path': 'stimuli/f00047.png'},
    {'name': 'stimuli/f00071.png', 'path': 'stimuli/f00071.png'},
    {'name': 'stimuli/f00095.png', 'path': 'stimuli/f00095.png'},
    {'name': 'stimuli/f00110.png', 'path': 'stimuli/f00110.png'},
    {'name': 'stimuli/f00121.png', 'path': 'stimuli/f00121.png'},
    {'name': 'stimuli/f00133.png', 'path': 'stimuli/f00133.png'},
    {'name': 'stimuli/f00142.png', 'path': 'stimuli/f00142.png'},
    {'name': 'stimuli/f00143.png', 'path': 'stimuli/f00143.png'},
    {'name': 'stimuli/f00156.png', 'path': 'stimuli/f00156.png'},
    {'name': 'stimuli/f00168.png', 'path': 'stimuli/f00168.png'},
    {'name': 'stimuli/f00169.png', 'path': 'stimuli/f00169.png'},
    {'name': 'stimuli/f00171.png', 'path': 'stimuli/f00171.png'},
    {'name': 'stimuli/f00174.png', 'path': 'stimuli/f00174.png'},
    {'name': 'stimuli/f00175.png', 'path': 'stimuli/f00175.png'},
    {'name': 'stimuli/f00176.png', 'path': 'stimuli/f00176.png'},
    {'name': 'stimuli/f00178.png', 'path': 'stimuli/f00178.png'},
    {'name': 'stimuli/f00188.png', 'path': 'stimuli/f00188.png'},
    {'name': 'stimuli/f00189.png', 'path': 'stimuli/f00189.png'},
    {'name': 'stimuli/f00192.png', 'path': 'stimuli/f00192.png'},
    {'name': 'stimuli/f00201.png', 'path': 'stimuli/f00201.png'},
    {'name': 'stimuli/f00207.png', 'path': 'stimuli/f00207.png'},
    {'name': 'stimuli/f00210.png', 'path': 'stimuli/f00210.png'},
    {'name': 'stimuli/f00219.png', 'path': 'stimuli/f00219.png'},
    {'name': 'stimuli/f00238.png', 'path': 'stimuli/f00238.png'},
    {'name': 'stimuli/f00239.png', 'path': 'stimuli/f00239.png'},
    {'name': 'stimuli/f00269.png', 'path': 'stimuli/f00269.png'},
    {'name': 'stimuli/f00275.png', 'path': 'stimuli/f00275.png'},
    {'name': 'stimuli/f00278.png', 'path': 'stimuli/f00278.png'},
    {'name': 'stimuli/f00284.png', 'path': 'stimuli/f00284.png'},
    {'name': 'stimuli/f00287.png', 'path': 'stimuli/f00287.png'},
    {'name': 'stimuli/f00325.png', 'path': 'stimuli/f00325.png'},
    {'name': 'stimuli/f00326.png', 'path': 'stimuli/f00326.png'},
    {'name': 'stimuli/f00327.png', 'path': 'stimuli/f00327.png'},
    {'name': 'stimuli/f00386.png', 'path': 'stimuli/f00386.png'},
    {'name': 'stimuli/f00387.png', 'path': 'stimuli/f00387.png'},
    {'name': 'stimuli/f00389.png', 'path': 'stimuli/f00389.png'},
    {'name': 'stimuli/f00390.png', 'path': 'stimuli/f00390.png'},
    {'name': 'stimuli/f00396.png', 'path': 'stimuli/f00396.png'},
    {'name': 'stimuli/f00398.png', 'path': 'stimuli/f00398.png'},
    {'name': 'stimuli/f00417.png', 'path': 'stimuli/f00417.png'},
    {'name': 'stimuli/f00425.png', 'path': 'stimuli/f00425.png'},
    {'name': 'stimuli/f00426.png', 'path': 'stimuli/f00426.png'},
    {'name': 'stimuli/f00429.png', 'path': 'stimuli/f00429.png'},
    {'name': 'stimuli/f00434.png', 'path': 'stimuli/f00434.png'},
    {'name': 'stimuli/f00439.png', 'path': 'stimuli/f00439.png'},
    {'name': 'stimuli/f00440.png', 'path': 'stimuli/f00440.png'},
    {'name': 'stimuli/f00444.png', 'path': 'stimuli/f00444.png'},
    {'name': 'stimuli/f00445.png', 'path': 'stimuli/f00445.png'},
    {'name': 'stimuli/f00451.png', 'path': 'stimuli/f00451.png'},
    {'name': 'stimuli/f00453.png', 'path': 'stimuli/f00453.png'},
    {'name': 'stimuli/f00455.png', 'path': 'stimuli/f00455.png'},
    {'name': 'stimuli/f00457.png', 'path': 'stimuli/f00457.png'},
    {'name': 'stimuli/f00480.png', 'path': 'stimuli/f00480.png'},
    {'name': 'stimuli/f00483.png', 'path': 'stimuli/f00483.png'},
    {'name': 'stimuli/f00484.png', 'path': 'stimuli/f00484.png'},
    {'name': 'stimuli/f00485.png', 'path': 'stimuli/f00485.png'},
    {'name': 'stimuli/f00508.png', 'path': 'stimuli/f00508.png'},
    {'name': 'stimuli/f00532.png', 'path': 'stimuli/f00532.png'},
    {'name': 'stimuli/f00544.png', 'path': 'stimuli/f00544.png'},
    {'name': 'stimuli/f00555.png', 'path': 'stimuli/f00555.png'},
    {'name': 'stimuli/f00577.png', 'path': 'stimuli/f00577.png'},
    {'name': 'stimuli/f00603.png', 'path': 'stimuli/f00603.png'},
    {'name': 'stimuli/f00608.png', 'path': 'stimuli/f00608.png'},
    {'name': 'stimuli/f00611.png', 'path': 'stimuli/f00611.png'},
    {'name': 'stimuli/f00612.png', 'path': 'stimuli/f00612.png'},
    {'name': 'stimuli/f00613.png', 'path': 'stimuli/f00613.png'},
    {'name': 'stimuli/f00629.png', 'path': 'stimuli/f00629.png'},
    {'name': 'stimuli/f00635.png', 'path': 'stimuli/f00635.png'},
    {'name': 'stimuli/f00639.png', 'path': 'stimuli/f00639.png'},
    {'name': 'stimuli/f00660.png', 'path': 'stimuli/f00660.png'},
    {'name': 'stimuli/f00721.png', 'path': 'stimuli/f00721.png'},
    {'name': 'stimuli/f00725.png', 'path': 'stimuli/f00725.png'},
    {'name': 'stimuli/f00746.png', 'path': 'stimuli/f00746.png'},
    {'name': 'stimuli/f00758.png', 'path': 'stimuli/f00758.png'},
    {'name': 'stimuli/f00772.png', 'path': 'stimuli/f00772.png'},
    {'name': 'stimuli/f00774.png', 'path': 'stimuli/f00774.png'},
    {'name': 'stimuli/f00809.png', 'path': 'stimuli/f00809.png'},
    {'name': 'stimuli/f00840.png', 'path': 'stimuli/f00840.png'},
    {'name': 'stimuli/f00841.png', 'path': 'stimuli/f00841.png'},
    {'name': 'stimuli/f00843.png', 'path': 'stimuli/f00843.png'},
    {'name': 'stimuli/f00847.png', 'path': 'stimuli/f00847.png'},
    {'name': 'stimuli/f00850.png', 'path': 'stimuli/f00850.png'},
    {'name': 'stimuli/f00851.png', 'path': 'stimuli/f00851.png'},
    {'name': 'stimuli/f00861.png', 'path': 'stimuli/f00861.png'},
    {'name': 'stimuli/f00862.png', 'path': 'stimuli/f00862.png'},
    {'name': 'stimuli/f00863.png', 'path': 'stimuli/f00863.png'},
    {'name': 'stimuli/f00864.png', 'path': 'stimuli/f00864.png'},
    {'name': 'stimuli/f00865.png', 'path': 'stimuli/f00865.png'},
    {'name': 'stimuli/f00867.png', 'path': 'stimuli/f00867.png'},
    {'name': 'stimuli/f00870.png', 'path': 'stimuli/f00870.png'},
    {'name': 'stimuli/f00874.png', 'path': 'stimuli/f00874.png'},
    {'name': 'stimuli/f00891.png', 'path': 'stimuli/f00891.png'},
    {'name': 'stimuli/f00906.png', 'path': 'stimuli/f00906.png'},
    {'name': 'stimuli/f00907.png', 'path': 'stimuli/f00907.png'},
    {'name': 'stimuli/f00922.png', 'path': 'stimuli/f00922.png'},
    {'name': 'stimuli/f00929.png', 'path': 'stimuli/f00929.png'},
    {'name': 'stimuli/f00929_backup_1.png', 'path': 'stimuli/f00929_backup_1.png'},
    {'name': 'stimuli/f00929_backup_2.png', 'path': 'stimuli/f00929_backup_2.png'},
    {'name': 'stimuli/f00929_backup_3.png', 'path': 'stimuli/f00929_backup_3.png'},
    {'name': 'stimuli/f00952.png', 'path': 'stimuli/f00952.png'},
    {'name': 'stimuli/f00966.png', 'path': 'stimuli/f00966.png'},
    {'name': 'stimuli/f00968.png', 'path': 'stimuli/f00968.png'},
    {'name': 'stimuli/f00969.png', 'path': 'stimuli/f00969.png'},
    {'name': 'stimuli/f00973.png', 'path': 'stimuli/f00973.png'},
    {'name': 'stimuli/f00974.png', 'path': 'stimuli/f00974.png'},
    {'name': 'stimuli/f00976.png', 'path': 'stimuli/f00976.png'},
    {'name': 'stimuli/f00987.png', 'path': 'stimuli/f00987.png'},
    {'name': 'stimuli/f01008.png', 'path': 'stimuli/f01008.png'},
    {'name': 'stimuli/f01050.png', 'path': 'stimuli/f01050.png'},
    {'name': 'stimuli/f01051.png', 'path': 'stimuli/f01051.png'},
    {'name': 'stimuli/f01054.png', 'path': 'stimuli/f01054.png'},
    {'name': 'stimuli/f01056.png', 'path': 'stimuli/f01056.png'},
    {'name': 'stimuli/f01062.png', 'path': 'stimuli/f01062.png'},
    {'name': 'stimuli/f01076.png', 'path': 'stimuli/f01076.png'},
    {'name': 'stimuli/f01090.png', 'path': 'stimuli/f01090.png'},
    {'name': 'stimuli/f01112.png', 'path': 'stimuli/f01112.png'},
    {'name': 'stimuli/f01124.png', 'path': 'stimuli/f01124.png'},
    {'name': 'stimuli/f01124_backup.png', 'path': 'stimuli/f01124_backup.png'},
    {'name': 'stimuli/f01137.png', 'path': 'stimuli/f01137.png'},
    {'name': 'stimuli/f01140.png', 'path': 'stimuli/f01140.png'},
    {'name': 'stimuli/f01147.png', 'path': 'stimuli/f01147.png'},
    {'name': 'stimuli/f01149.png', 'path': 'stimuli/f01149.png'},
    {'name': 'stimuli/f01163.png', 'path': 'stimuli/f01163.png'},
    {'name': 'stimuli/f01173.png', 'path': 'stimuli/f01173.png'},
    {'name': 'stimuli/f01183.png', 'path': 'stimuli/f01183.png'},
    {'name': 'stimuli/f01193.png', 'path': 'stimuli/f01193.png'},
    {'name': 'stimuli/f01198.png', 'path': 'stimuli/f01198.png'},
    {'name': 'stimuli/f01203.png', 'path': 'stimuli/f01203.png'},
    {'name': 'stimuli/f01250.png', 'path': 'stimuli/f01250.png'},
    {'name': 'stimuli/f01253.png', 'path': 'stimuli/f01253.png'},
    {'name': 'stimuli/f01278.png', 'path': 'stimuli/f01278.png'},
    {'name': 'stimuli/f01306.png', 'path': 'stimuli/f01306.png'},
    {'name': 'stimuli/f01315.png', 'path': 'stimuli/f01315.png'},
    {'name': 'stimuli/f01320.png', 'path': 'stimuli/f01320.png'},
    {'name': 'stimuli/f01327.png', 'path': 'stimuli/f01327.png'},
    {'name': 'stimuli/f01344.png', 'path': 'stimuli/f01344.png'},
    {'name': 'stimuli/f01389.png', 'path': 'stimuli/f01389.png'},
    {'name': 'stimuli/f01415.png', 'path': 'stimuli/f01415.png'},
    {'name': 'stimuli/f01440.png', 'path': 'stimuli/f01440.png'},
    {'name': 'stimuli/f01441.png', 'path': 'stimuli/f01441.png'},
    {'name': 'stimuli/f01454.png', 'path': 'stimuli/f01454.png'},
    {'name': 'stimuli/f01490.png', 'path': 'stimuli/f01490.png'},
    {'name': 'stimuli/f01505.png', 'path': 'stimuli/f01505.png'},
    {'name': 'stimuli/f01515.png', 'path': 'stimuli/f01515.png'},
    {'name': 'stimuli/f01517.png', 'path': 'stimuli/f01517.png'},
    {'name': 'stimuli/f01518.png', 'path': 'stimuli/f01518.png'},
    {'name': 'stimuli/f01531.png', 'path': 'stimuli/f01531.png'},
    {'name': 'stimuli/f01533.png', 'path': 'stimuli/f01533.png'},
    {'name': 'stimuli/f01536.png', 'path': 'stimuli/f01536.png'},
    {'name': 'stimuli/f01537.png', 'path': 'stimuli/f01537.png'},
    {'name': 'stimuli/f01538.png', 'path': 'stimuli/f01538.png'},
    {'name': 'stimuli/f01539.png', 'path': 'stimuli/f01539.png'},
    {'name': 'stimuli/f01585.png', 'path': 'stimuli/f01585.png'},
    {'name': 'stimuli/f01588.png', 'path': 'stimuli/f01588.png'},
    {'name': 'stimuli/f01594.png', 'path': 'stimuli/f01594.png'},
    {'name': 'stimuli/f01608.png', 'path': 'stimuli/f01608.png'},
    {'name': 'stimuli/f01625.png', 'path': 'stimuli/f01625.png'},
    {'name': 'stimuli/f01669.png', 'path': 'stimuli/f01669.png'},
    {'name': 'stimuli/f01681.png', 'path': 'stimuli/f01681.png'},
    {'name': 'stimuli/f01684.png', 'path': 'stimuli/f01684.png'},
    {'name': 'stimuli/f01702.png', 'path': 'stimuli/f01702.png'},
    {'name': 'stimuli/f01714.png', 'path': 'stimuli/f01714.png'},
    {'name': 'stimuli/f01755.png', 'path': 'stimuli/f01755.png'},
    {'name': 'stimuli/f01759.png', 'path': 'stimuli/f01759.png'},
    {'name': 'stimuli/f01764.png', 'path': 'stimuli/f01764.png'},
    {'name': 'stimuli/f01768.png', 'path': 'stimuli/f01768.png'},
    {'name': 'stimuli/f01794.png', 'path': 'stimuli/f01794.png'},
    {'name': 'stimuli/f01813.png', 'path': 'stimuli/f01813.png'},
    {'name': 'stimuli/f01818.png', 'path': 'stimuli/f01818.png'},
    {'name': 'stimuli/f01855.png', 'path': 'stimuli/f01855.png'},
    {'name': 'stimuli/f01860.png', 'path': 'stimuli/f01860.png'},
    {'name': 'stimuli/f01866.png', 'path': 'stimuli/f01866.png'},
    {'name': 'stimuli/f01926.png', 'path': 'stimuli/f01926.png'},
    {'name': 'stimuli/f01931.png', 'path': 'stimuli/f01931.png'},
    {'name': 'stimuli/f01961.png', 'path': 'stimuli/f01961.png'},
    {'name': 'stimuli/f01967.png', 'path': 'stimuli/f01967.png'},
    {'name': 'stimuli/f02010.png', 'path': 'stimuli/f02010.png'},
    {'name': 'stimuli/f02070.png', 'path': 'stimuli/f02070.png'},
    {'name': 'stimuli/f02095.png', 'path': 'stimuli/f02095.png'},
    {'name': 'stimuli/f02120.png', 'path': 'stimuli/f02120.png'},
    {'name': 'stimuli/f02125.png', 'path': 'stimuli/f02125.png'},
    {'name': 'stimuli/f02183.png', 'path': 'stimuli/f02183.png'},
    {'name': 'stimuli/f02311.png', 'path': 'stimuli/f02311.png'},
    {'name': 'stimuli/f02335.png', 'path': 'stimuli/f02335.png'},
    {'name': 'stimuli/f02502.png', 'path': 'stimuli/f02502.png'},
    {'name': 'stimuli/f02521.png', 'path': 'stimuli/f02521.png'},
    {'name': 'sequences/a19/a19_listA.csv', 'path': 'sequences/a19/a19_listA.csv'},
    {'name': 'sequences/a19/a19_listB.csv', 'path': 'sequences/a19/a19_listB.csv'},
    {'name': 'sequences/a19/a19_listC.csv', 'path': 'sequences/a19/a19_listC.csv'},
    {'name': 'sequences/a19/a19_listD.csv', 'path': 'sequences/a19/a19_listD.csv'},
    {'name': 'sequences/a19/a19_listE.csv', 'path': 'sequences/a19/a19_listE.csv'},
    {'name': 'sequences/b02/b02_listA.csv', 'path': 'sequences/b02/b02_listA.csv'},
    {'name': 'sequences/b02/b02_listB.csv', 'path': 'sequences/b02/b02_listB.csv'},
    {'name': 'sequences/b02/b02_listC.csv', 'path': 'sequences/b02/b02_listC.csv'},
    {'name': 'sequences/b02/b02_listD.csv', 'path': 'sequences/b02/b02_listD.csv'},
    {'name': 'sequences/b02/b02_listE.csv', 'path': 'sequences/b02/b02_listE.csv'},
    {'name': 'sequences/b11/b11_listA.csv', 'path': 'sequences/b11/b11_listA.csv'},
    {'name': 'sequences/b11/b11_listB.csv', 'path': 'sequences/b11/b11_listB.csv'},
    {'name': 'sequences/b11/b11_listC.csv', 'path': 'sequences/b11/b11_listC.csv'},
    {'name': 'sequences/b11/b11_listD.csv', 'path': 'sequences/b11/b11_listD.csv'},
    {'name': 'sequences/b11/b11_listE.csv', 'path': 'sequences/b11/b11_listE.csv'},
    {'name': 'sequences/b10/b10_listA.csv', 'path': 'sequences/b10/b10_listA.csv'},
    {'name': 'sequences/b10/b10_listB.csv', 'path': 'sequences/b10/b10_listB.csv'},
    {'name': 'sequences/b10/b10_listC.csv', 'path': 'sequences/b10/b10_listC.csv'},
    {'name': 'sequences/b10/b10_listD.csv', 'path': 'sequences/b10/b10_listD.csv'},
    {'name': 'sequences/b10/b10_listE.csv', 'path': 'sequences/b10/b10_listE.csv'},
    {'name': 'sequences/c10/c10_listA.csv', 'path': 'sequences/c10/c10_listA.csv'},
    {'name': 'sequences/c10/c10_listB.csv', 'path': 'sequences/c10/c10_listB.csv'},
    {'name': 'sequences/c10/c10_listC.csv', 'path': 'sequences/c10/c10_listC.csv'},
    {'name': 'sequences/c10/c10_listD.csv', 'path': 'sequences/c10/c10_listD.csv'},
    {'name': 'sequences/c10/c10_listE.csv', 'path': 'sequences/c10/c10_listE.csv'},
    {'name': 'sequences/c13/c13_listA.csv', 'path': 'sequences/c13/c13_listA.csv'},
    {'name': 'sequences/c13/c13_listB.csv', 'path': 'sequences/c13/c13_listB.csv'},
    {'name': 'sequences/c13/c13_listC.csv', 'path': 'sequences/c13/c13_listC.csv'},
    {'name': 'sequences/c13/c13_listD.csv', 'path': 'sequences/c13/c13_listD.csv'},
    {'name': 'sequences/c13/c13_listE.csv', 'path': 'sequences/c13/c13_listE.csv'},
    {'name': 'sequences/c28/c28_listA.csv', 'path': 'sequences/c28/c28_listA.csv'},
    {'name': 'sequences/c28/c28_listB.csv', 'path': 'sequences/c28/c28_listB.csv'},
    {'name': 'sequences/c28/c28_listC.csv', 'path': 'sequences/c28/c28_listC.csv'},
    {'name': 'sequences/c28/c28_listD.csv', 'path': 'sequences/c28/c28_listD.csv'},
    {'name': 'sequences/c28/c28_listE.csv', 'path': 'sequences/c28/c28_listE.csv'},
    {'name': 'sequences/f12/f12_listA.csv', 'path': 'sequences/f12/f12_listA.csv'},
    {'name': 'sequences/f12/f12_listB.csv', 'path': 'sequences/f12/f12_listB.csv'},
    {'name': 'sequences/f12/f12_listC.csv', 'path': 'sequences/f12/f12_listC.csv'},
    {'name': 'sequences/f12/f12_listD.csv', 'path': 'sequences/f12/f12_listD.csv'},
    {'name': 'sequences/f12/f12_listE.csv', 'path': 'sequences/f12/f12_listE.csv'},
    {'name': 'sequences/f15/f15_listA.csv', 'path': 'sequences/f15/f15_listA.csv'},
    {'name': 'sequences/f15/f15_listB.csv', 'path': 'sequences/f15/f15_listB.csv'},
    {'name': 'sequences/f15/f15_listC.csv', 'path': 'sequences/f15/f15_listC.csv'},
    {'name': 'sequences/f15/f15_listD.csv', 'path': 'sequences/f15/f15_listD.csv'},
    {'name': 'sequences/f15/f15_listE.csv', 'path': 'sequences/f15/f15_listE.csv'},
    {'name': 'sequences/f17/f17_listA.csv', 'path': 'sequences/f17/f17_listA.csv'},
    {'name': 'sequences/f17/f17_listB.csv', 'path': 'sequences/f17/f17_listB.csv'},
    {'name': 'sequences/f17/f17_listC.csv', 'path': 'sequences/f17/f17_listC.csv'},
    {'name': 'sequences/f17/f17_listD.csv', 'path': 'sequences/f17/f17_listD.csv'},
    {'name': 'sequences/f17/f17_listE.csv', 'path': 'sequences/f17/f17_listE.csv'},
    {'name': 'sequences/l02/l02_listA.csv', 'path': 'sequences/l02/l02_listA.csv'},
    {'name': 'sequences/l02/l02_listB.csv', 'path': 'sequences/l02/l02_listB.csv'},
    {'name': 'sequences/l02/l02_listC.csv', 'path': 'sequences/l02/l02_listC.csv'},
    {'name': 'sequences/l02/l02_listD.csv', 'path': 'sequences/l02/l02_listD.csv'},
    {'name': 'sequences/l02/l02_listE.csv', 'path': 'sequences/l02/l02_listE.csv'},
    {'name': 'sequences/l12/l12_listA.csv', 'path': 'sequences/l12/l12_listA.csv'},
    {'name': 'sequences/l12/l12_listB.csv', 'path': 'sequences/l12/l12_listB.csv'},
    {'name': 'sequences/l12/l12_listC.csv', 'path': 'sequences/l12/l12_listC.csv'},
    {'name': 'sequences/l12/l12_listD.csv', 'path': 'sequences/l12/l12_listD.csv'},
    {'name': 'sequences/l12/l12_listE.csv', 'path': 'sequences/l12/l12_listE.csv'},
    {'name': 'sequences/l23/l23_listA.csv', 'path': 'sequences/l23/l23_listA.csv'},
    {'name': 'sequences/l23/l23_listB.csv', 'path': 'sequences/l23/l23_listB.csv'},
    {'name': 'sequences/l23/l23_listC.csv', 'path': 'sequences/l23/l23_listC.csv'},
    {'name': 'sequences/l23/l23_listD.csv', 'path': 'sequences/l23/l23_listD.csv'},
    {'name': 'sequences/l23/l23_listE.csv', 'path': 'sequences/l23/l23_listE.csv'},
    {'name': 'sequences/p13/p13_listA.csv', 'path': 'sequences/p13/p13_listA.csv'},
    {'name': 'sequences/p13/p13_listB.csv', 'path': 'sequences/p13/p13_listB.csv'},
    {'name': 'sequences/p13/p13_listC.csv', 'path': 'sequences/p13/p13_listC.csv'},
    {'name': 'sequences/p13/p13_listD.csv', 'path': 'sequences/p13/p13_listD.csv'},
    {'name': 'sequences/p13/p13_listE.csv', 'path': 'sequences/p13/p13_listE.csv'},
    {'name': 'sequences/p20/p20_listA.csv', 'path': 'sequences/p20/p20_listA.csv'},
    {'name': 'sequences/p20/p20_listB.csv', 'path': 'sequences/p20/p20_listB.csv'},
    {'name': 'sequences/p20/p20_listC.csv', 'path': 'sequences/p20/p20_listC.csv'},
    {'name': 'sequences/p20/p20_listD.csv', 'path': 'sequences/p20/p20_listD.csv'},
    {'name': 'sequences/p20/p20_listE.csv', 'path': 'sequences/p20/p20_listE.csv'},
    {'name': 'sequences/p35/p35_listA.csv', 'path': 'sequences/p35/p35_listA.csv'},
    {'name': 'sequences/p35/p35_listB.csv', 'path': 'sequences/p35/p35_listB.csv'},
    {'name': 'sequences/p35/p35_listC.csv', 'path': 'sequences/p35/p35_listC.csv'},
    {'name': 'sequences/p35/p35_listD.csv', 'path': 'sequences/p35/p35_listD.csv'},
    {'name': 'sequences/p35/p35_listE.csv', 'path': 'sequences/p35/p35_listE.csv'},
    {'name': 'sequences/pl11/pl11_listA.csv', 'path': 'sequences/pl11/pl11_listA.csv'},
    {'name': 'sequences/pl11/pl11_listB.csv', 'path': 'sequences/pl11/pl11_listB.csv'},
    {'name': 'sequences/pl11/pl11_listC.csv', 'path': 'sequences/pl11/pl11_listC.csv'},
    {'name': 'sequences/pl11/pl11_listD.csv', 'path': 'sequences/pl11/pl11_listD.csv'},
    {'name': 'sequences/pl11/pl11_listE.csv', 'path': 'sequences/pl11/pl11_listE.csv'},
    {'name': 'sequences/pl22/pl22_listA.csv', 'path': 'sequences/pl22/pl22_listA.csv'},
    {'name': 'sequences/pl22/pl22_listB.csv', 'path': 'sequences/pl22/pl22_listB.csv'},
    {'name': 'sequences/pl22/pl22_listC.csv', 'path': 'sequences/pl22/pl22_listC.csv'},
    {'name': 'sequences/pl22/pl22_listD.csv', 'path': 'sequences/pl22/pl22_listD.csv'},
    {'name': 'sequences/pl22/pl22_listE.csv', 'path': 'sequences/pl22/pl22_listE.csv'},
    {'name': 'sequences/pl24/pl24_listA.csv', 'path': 'sequences/pl24/pl24_listA.csv'},
    {'name': 'sequences/pl24/pl24_listB.csv', 'path': 'sequences/pl24/pl24_listB.csv'},
    {'name': 'sequences/pl24/pl24_listC.csv', 'path': 'sequences/pl24/pl24_listC.csv'},
    {'name': 'sequences/pl24/pl24_listD.csv', 'path': 'sequences/pl24/pl24_listD.csv'},
    {'name': 'sequences/pl24/pl24_listE.csv', 'path': 'sequences/pl24/pl24_listE.csv'},
    {'name': 'sequences/t17/t17_listA.csv', 'path': 'sequences/t17/t17_listA.csv'},
    {'name': 'sequences/t17/t17_listB.csv', 'path': 'sequences/t17/t17_listB.csv'},
    {'name': 'sequences/t17/t17_listC.csv', 'path': 'sequences/t17/t17_listC.csv'},
    {'name': 'sequences/t17/t17_listD.csv', 'path': 'sequences/t17/t17_listD.csv'},
    {'name': 'sequences/t17/t17_listE.csv', 'path': 'sequences/t17/t17_listE.csv'},
    {'name': 'sequences/t20/t20_listA.csv', 'path': 'sequences/t20/t20_listA.csv'},
    {'name': 'sequences/t20/t20_listB.csv', 'path': 'sequences/t20/t20_listB.csv'},
    {'name': 'sequences/t20/t20_listC.csv', 'path': 'sequences/t20/t20_listC.csv'},
    {'name': 'sequences/t20/t20_listD.csv', 'path': 'sequences/t20/t20_listD.csv'},
    {'name': 'sequences/t20/t20_listE.csv', 'path': 'sequences/t20/t20_listE.csv'},
    {'name': 'sequences/t24/t24_listA.csv', 'path': 'sequences/t24/t24_listA.csv'},
    {'name': 'sequences/t24/t24_listB.csv', 'path': 'sequences/t24/t24_listB.csv'},
    {'name': 'sequences/t24/t24_listC.csv', 'path': 'sequences/t24/t24_listC.csv'},
    {'name': 'sequences/t24/t24_listD.csv', 'path': 'sequences/t24/t24_listD.csv'},
    {'name': 'sequences/t24/t24_listE.csv', 'path': 'sequences/t24/t24_listE.csv'},
    {'name': 'sequences/ty07/ty07_listA.csv', 'path': 'sequences/ty07/ty07_listA.csv'},
    {'name': 'sequences/ty07/ty07_listB.csv', 'path': 'sequences/ty07/ty07_listB.csv'},
    {'name': 'sequences/ty07/ty07_listC.csv', 'path': 'sequences/ty07/ty07_listC.csv'},
    {'name': 'sequences/ty07/ty07_listD.csv', 'path': 'sequences/ty07/ty07_listD.csv'},
    {'name': 'sequences/ty07/ty07_listE.csv', 'path': 'sequences/ty07/ty07_listE.csv'},
    {'name': 'sequences/ty10/ty10_listA.csv', 'path': 'sequences/ty10/ty10_listA.csv'},
    {'name': 'sequences/ty10/ty10_listB.csv', 'path': 'sequences/ty10/ty10_listB.csv'},
    {'name': 'sequences/ty10/ty10_listC.csv', 'path': 'sequences/ty10/ty10_listC.csv'},
    {'name': 'sequences/ty10/ty10_listD.csv', 'path': 'sequences/ty10/ty10_listD.csv'},
    {'name': 'sequences/ty10/ty10_listE.csv', 'path': 'sequences/ty10/ty10_listE.csv'},
    {'name': 'sequences/ty12/ty12_listA.csv', 'path': 'sequences/ty12/ty12_listA.csv'},
    {'name': 'sequences/ty12/ty12_listB.csv', 'path': 'sequences/ty12/ty12_listB.csv'},
    {'name': 'sequences/ty12/ty12_listC.csv', 'path': 'sequences/ty12/ty12_listC.csv'},
    {'name': 'sequences/ty12/ty12_listD.csv', 'path': 'sequences/ty12/ty12_listD.csv'},
    {'name': 'sequences/ty12/ty12_listE.csv', 'path': 'sequences/ty12/ty12_listE.csv'},
    {'name': 'sequences/v03/v03_listA.csv', 'path': 'sequences/v03/v03_listA.csv'},
    {'name': 'sequences/v03/v03_listB.csv', 'path': 'sequences/v03/v03_listB.csv'},
    {'name': 'sequences/v03/v03_listC.csv', 'path': 'sequences/v03/v03_listC.csv'},
    {'name': 'sequences/v03/v03_listD.csv', 'path': 'sequences/v03/v03_listD.csv'},
    {'name': 'sequences/v03/v03_listE.csv', 'path': 'sequences/v03/v03_listE.csv'},
    {'name': 'sequences/v04/v04_listA.csv', 'path': 'sequences/v04/v04_listA.csv'},
    {'name': 'sequences/v04/v04_listB.csv', 'path': 'sequences/v04/v04_listB.csv'},
    {'name': 'sequences/v04/v04_listC.csv', 'path': 'sequences/v04/v04_listC.csv'},
    {'name': 'sequences/v04/v04_listD.csv', 'path': 'sequences/v04/v04_listD.csv'},
    {'name': 'sequences/v04/v04_listE.csv', 'path': 'sequences/v04/v04_listE.csv'},
    {'name': 'randomized_lists/stimlist01.csv', 'path': 'randomized_lists/stimlist01.csv'},
    {'name': 'randomized_lists/stimlist02.csv', 'path': 'randomized_lists/stimlist02.csv'},
    {'name': 'randomized_lists/stimlist03.csv', 'path': 'randomized_lists/stimlist03.csv'},
    {'name': 'randomized_lists/stimlist04.csv', 'path': 'randomized_lists/stimlist04.csv'},
    {'name': 'randomized_lists/stimlist05.csv', 'path': 'randomized_lists/stimlist05.csv'},
    {'name': 'randomized_lists/stimlist06.csv', 'path': 'randomized_lists/stimlist06.csv'},
    {'name': 'randomized_lists/stimlist07.csv', 'path': 'randomized_lists/stimlist07.csv'},
    {'name': 'randomized_lists/stimlist08.csv', 'path': 'randomized_lists/stimlist08.csv'},
    {'name': 'randomized_lists/stimlist09.csv', 'path': 'randomized_lists/stimlist09.csv'},
    {'name': 'randomized_lists/stimlist10.csv', 'path': 'randomized_lists/stimlist10.csv'},
    {'name': 'randomized_lists/stimlist11.csv', 'path': 'randomized_lists/stimlist11.csv'},
    {'name': 'randomized_lists/stimlist12.csv', 'path': 'randomized_lists/stimlist12.csv'},
    {'name': 'randomized_lists/stimlist13.csv', 'path': 'randomized_lists/stimlist13.csv'},
    {'name': 'randomized_lists/stimlist14.csv', 'path': 'randomized_lists/stimlist14.csv'},
    {'name': 'randomized_lists/stimlist15.csv', 'path': 'randomized_lists/stimlist15.csv'},
    {'name': 'assets/images/16_Main_Test.jpg', 'path': 'assets/images/16_Main_Test.jpg'},
    {'name': 'assets/images/17_Main_Test.jpg', 'path': 'assets/images/17_Main_Test.jpg'},
    {'name': 'assets/sounds/Main_1.wav', 'path': 'assets/sounds/Main_1.wav'},
    {'name': 'assets/sounds/Main_2.wav', 'path': 'assets/sounds/Main_2.wav'},
    {'name': 'assets/sounds/Main_2_ALT.wav', 'path': 'assets/sounds/Main_2_ALT.wav'},
    {'name': 'assets/sounds/Main_3.wav', 'path': 'assets/sounds/Main_3.wav'},
    {'name': 'assets/sounds/Main_4.wav', 'path': 'assets/sounds/Main_4.wav'},
    {'name': 'assets/sounds/Main_5.wav', 'path': 'assets/sounds/Main_5.wav'},
    {'name': 'assets/sounds/Main_6.wav', 'path': 'assets/sounds/Main_6.wav'},
    {'name': 'assets/sounds/Main_7.wav', 'path': 'assets/sounds/Main_7.wav'},
    {'name': 'assets/sounds/Main_8_a.wav', 'path': 'assets/sounds/Main_8_a.wav'},
    {'name': 'assets/sounds/Main_8_b.wav', 'path': 'assets/sounds/Main_8_b.wav'},
    {'name': 'assets/sounds/Main_8_c.wav', 'path': 'assets/sounds/Main_8_c.wav'},
    {'name': 'assets/sounds/Main_8_d.wav', 'path': 'assets/sounds/Main_8_d.wav'},
    {'name': 'assets/sounds/Main_9.wav', 'path': 'assets/sounds/Main_9.wav'},
    {'name': 'assets/sounds/Main_10_a.wav', 'path': 'assets/sounds/Main_10_a.wav'},
    {'name': 'assets/sounds/Main_10_b.wav', 'path': 'assets/sounds/Main_10_b.wav'},
    {'name': 'assets/sounds/Main_10_c.wav', 'path': 'assets/sounds/Main_10_c.wav'},
    {'name': 'assets/sounds/Main_10_d.wav', 'path': 'assets/sounds/Main_10_d.wav'},
    {'name': 'assets/sounds/Main_11.wav', 'path': 'assets/sounds/Main_11.wav'},
    {'name': 'assets/sounds/Main_12.wav', 'path': 'assets/sounds/Main_12.wav'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
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


var outer_csv_selectorClock;
var listPath;
var start_screenClock;
var bg_start_img;
var btn_start_img;
var click_start_mouse;
var welcome_screenClock;
var bg_welcome_img;
var btn_welcome_img;
var click_welcome_mouse;
var sound_welcome;
var library_checkClock;
var bg_library1_img;
var btn_libfirst1_img;
var click_libfirst1_mouse;
var sound_library1;
var library_entryClock;
var bg_library2_img;
var btn_libfirst2_img;
var click_libfirst2_mouse;
var sound_library2;
var library_seenClock;
var bg_library3_img;
var btn_libsecond_img;
var click_libsecond_mouse;
var sound_library3;
var rules_start_screenClock;
var bg_rulesstart_img;
var btn_rulesstart_img;
var click_rulesstart_mouse;
var sound_rulesstart;
var rules_01_screenClock;
var bg_rules01_img;
var btn_rules01_img;
var click_rules01_mouse;
var sound_rules1;
var rules_02_screenClock;
var bg_rules02_img;
var btn_rules02_img;
var click_rules02_mouse;
var sound_rules2;
var trial_start_screenClock;
var bg_trialstart_img;
var btn_trialstart_img;
var click_trialstart_mouse;
var sound_trialstart;
var csv_selectorClock;
var concPathTrain;
var train_fixationClock;
var bg_trial_fix;
var polygon;
var train_maskClock;
var bg_trial_mask;
var train_stimulus_presentationClock;
var bg_trial_stimpres;
var stimulus_presentation_train;
var stop_training;
var train_yesno_responseClock;
var bg_trial_yesno;
var btn_yesno_yes_img;
var btn_yesno_no_img;
var sound_trial_yesno;
var trial_yesno_response;
var click_yesno_mouse;
var train_written_responseClock;
var bg_trial_written;
var previousText;
var sound_train_written;
var textbox_response_training;
var click_written_mouse;
var btn_written_img;
var train_feedbackClock;
var bg_feedback_train;
var btn_feedback_img;
var click_feedback_mouse;
var feedback_concept;
var sound_training_feedback;
var main_start_screenClock;
var bg_mainstart_img;
var btn_mainstart_img;
var click_mainstart_mouse;
var sound_mainstart;
var csv_selector_mainClock;
var concPathMain;
var main_fixationClock;
var bg_main_fix;
var polygon_main;
var main_maskClock;
var bg_trial_mask_2;
var main_stimulus_presentationClock;
var bg_main_stimpres;
var stimulus_presentation_main;
var main_yesno_responseClock;
var bg_main_yesno;
var btn_yesno_yes_main;
var btn_yesno_no_main;
var main_yesno_key_response;
var main_yesno_mouse;
var sound_main_yesno;
var main_written_responseClock;
var bg_main_written;
var textbox_response_main;
var main_written_mouse;
var btn_written_main;
var sound_main_written;
var main_feedbackClock;
var bg_feedback_main;
var btn_feedback_main;
var main_feedback_mouse;
var feedback_concept_main;
var endClock;
var bg_goodbye_img;
var sound_1;
var binoc_findClock;
var bg_binocfind_img;
var btn_binocfind_img;
var click_binocfind_mouse;
var sound_binoc_find;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "outer_csv_selector"
  outer_csv_selectorClock = new util.Clock();
  // Run 'Begin Experiment' code from outer_list_pathway_construction
  listPath = `randomized_lists/stimlist${expInfo['listNum']}.csv`;
  
  console.log("Loading:", listPath);
  
  expInfo['listPath'] = listPath;
  // Initialize components for Routine "start_screen"
  start_screenClock = new util.Clock();
  bg_start_img = new visual.ImageStim({
    win : psychoJS.window,
    name : 'bg_start_img', units : 'norm', 
    image : 'assets/images/1_Main_Start.jpg', mask : undefined,
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
    image : 'assets/images/2_Main_Introduction.jpg', mask : undefined,
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
  sound_welcome = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_welcome.setVolume(1.0);
  sound_welcome.isPlaying = false;
  sound_welcome.isFinished = false;
  // Initialize components for Routine "library_check"
  library_checkClock = new util.Clock();
  bg_library1_img = new visual.ImageStim({
    win : psychoJS.window,
    name : 'bg_library1_img', units : 'norm', 
    image : 'assets/images/3_Main_Introduction.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [2, 2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  btn_libfirst1_img = new visual.ImageStim({
    win : psychoJS.window,
    name : 'btn_libfirst1_img', units : 'pix', 
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
  click_libfirst1_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  click_libfirst1_mouse.mouseClock = new util.Clock();
  // Run 'Begin Experiment' code from libfirst1_screen_button_placement
  btn_libfirst1_img.pos = [w/3, h/3];  // bottom-right third center
  sound_library1 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_library1.setVolume(1.0);
  sound_library1.isPlaying = false;
  sound_library1.isFinished = false;
  // Initialize components for Routine "library_entry"
  library_entryClock = new util.Clock();
  bg_library2_img = new visual.ImageStim({
    win : psychoJS.window,
    name : 'bg_library2_img', units : 'norm', 
    image : 'assets/images/4_Main_Introduction.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [2, 2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  btn_libfirst2_img = new visual.ImageStim({
    win : psychoJS.window,
    name : 'btn_libfirst2_img', units : 'pix', 
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
  click_libfirst2_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  click_libfirst2_mouse.mouseClock = new util.Clock();
  // Run 'Begin Experiment' code from libfirst2_screen_button_placement
  btn_libfirst2_img.pos = [w/3, -h/3];  // bottom-right third center
  sound_library2 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_library2.setVolume(1.0);
  sound_library2.isPlaying = false;
  sound_library2.isFinished = false;
  // Initialize components for Routine "library_seen"
  library_seenClock = new util.Clock();
  bg_library3_img = new visual.ImageStim({
    win : psychoJS.window,
    name : 'bg_library3_img', units : 'norm', 
    image : 'assets/images/22_Main_ALT_Introduction.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [2, 2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  btn_libsecond_img = new visual.ImageStim({
    win : psychoJS.window,
    name : 'btn_libsecond_img', units : 'pix', 
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
  click_libsecond_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  click_libsecond_mouse.mouseClock = new util.Clock();
  // Run 'Begin Experiment' code from libsecond_screen_button_placement
  btn_libsecond_img.pos = [w/3, -h/3];  // bottom-right third center
  sound_library3 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_library3.setVolume(1.0);
  sound_library3.isPlaying = false;
  sound_library3.isFinished = false;
  // Initialize components for Routine "rules_start_screen"
  rules_start_screenClock = new util.Clock();
  bg_rulesstart_img = new visual.ImageStim({
    win : psychoJS.window,
    name : 'bg_rulesstart_img', units : 'norm', 
    image : 'assets/images/5_Main_Instruction.jpg', mask : undefined,
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
  sound_rulesstart = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_rulesstart.setVolume(1.0);
  sound_rulesstart.isPlaying = false;
  sound_rulesstart.isFinished = false;
  // Initialize components for Routine "rules_01_screen"
  rules_01_screenClock = new util.Clock();
  bg_rules01_img = new visual.ImageStim({
    win : psychoJS.window,
    name : 'bg_rules01_img', units : 'norm', 
    image : 'assets/images/6_Main_Instruction.jpg', mask : undefined,
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
  sound_rules1 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_rules1.setVolume(1.0);
  sound_rules1.isPlaying = false;
  sound_rules1.isFinished = false;
  // Initialize components for Routine "rules_02_screen"
  rules_02_screenClock = new util.Clock();
  bg_rules02_img = new visual.ImageStim({
    win : psychoJS.window,
    name : 'bg_rules02_img', units : 'norm', 
    image : 'assets/images/7_Main_Instruction.jpg', mask : undefined,
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
  sound_rules2 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_rules2.setVolume(1.0);
  sound_rules2.isPlaying = false;
  sound_rules2.isFinished = false;
  // Initialize components for Routine "trial_start_screen"
  trial_start_screenClock = new util.Clock();
  bg_trialstart_img = new visual.ImageStim({
    win : psychoJS.window,
    name : 'bg_trialstart_img', units : 'norm', 
    image : 'assets/images/8_Main_Practice.jpg', mask : undefined,
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
  sound_trialstart = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_trialstart.setVolume(1.0);
  sound_trialstart.isPlaying = false;
  sound_trialstart.isFinished = false;
  // Initialize components for Routine "csv_selector"
  csv_selectorClock = new util.Clock();
  // Run 'Begin Experiment' code from pathway_construction_training
  // Define your variable
  concPathTrain = 'sequences/a05/a05_listE.csv';
  
  // Make it available globally (Builder-friendly)
  expInfo['concPathTrain'] = concPathTrain;
  // Initialize components for Routine "train_fixation"
  train_fixationClock = new util.Clock();
  bg_trial_fix = new visual.ImageStim({
    win : psychoJS.window,
    name : 'bg_trial_fix', units : 'norm', 
    image : 'assets/images/9_Main_Practice.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [2, 2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  polygon = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon', 
    vertices: 'cross', size:[0.3, 0.3],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 0.5, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color('black'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -1, 
    interpolate: true, 
  });
  
  // Run 'Begin Experiment' code from jitter
  expInfo['fixDuration'] = 0.8 + Math.random() * 0.4;
  // Initialize components for Routine "train_mask"
  train_maskClock = new util.Clock();
  bg_trial_mask = new visual.ImageStim({
    win : psychoJS.window,
    name : 'bg_trial_mask', units : 'norm', 
    image : 'assets/images/9_Main_Practice.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [2, 2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "train_stimulus_presentation"
  train_stimulus_presentationClock = new util.Clock();
  bg_trial_stimpres = new visual.ImageStim({
    win : psychoJS.window,
    name : 'bg_trial_stimpres', units : 'norm', 
    image : 'assets/images/9_Main_Practice.jpg', mask : undefined,
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
  
  // Initialize components for Routine "train_yesno_response"
  train_yesno_responseClock = new util.Clock();
  bg_trial_yesno = new visual.ImageStim({
    win : psychoJS.window,
    name : 'bg_trial_yesno', units : 'norm', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [2, 2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
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
    texRes : 128.0, interpolate : true, depth : -2.0 
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
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  sound_trial_yesno = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_trial_yesno.setVolume(1.0);
  sound_trial_yesno.isPlaying = false;
  sound_trial_yesno.isFinished = false;
  trial_yesno_response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  click_yesno_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  click_yesno_mouse.mouseClock = new util.Clock();
  // Run 'Begin Experiment' code from training_button_placement
  btn_yesno_yes_img.pos = [w/4, -h/6];
  btn_yesno_no_img.pos = [-w/4, -h/6];
  
  
  // Initialize components for Routine "train_written_response"
  train_written_responseClock = new util.Clock();
  bg_trial_written = new visual.ImageStim({
    win : psychoJS.window,
    name : 'bg_trial_written', units : 'norm', 
    image : 'assets/images/18_Main_Test.jpg', mask : undefined,
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
  previousText = {}; 
  sound_train_written = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: 2,
      });
  sound_train_written.setVolume(1.0);
  sound_train_written.isPlaying = false;
  sound_train_written.isFinished = false;
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
    depth: -3.0 
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
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  // Run 'Begin Experiment' code from written_button_placement
  btn_written_img.pos = [0, -h/3];  // bottom-right third center
  // Initialize components for Routine "train_feedback"
  train_feedbackClock = new util.Clock();
  bg_feedback_train = new visual.ImageStim({
    win : psychoJS.window,
    name : 'bg_feedback_train', units : 'norm', 
    image : 'assets/images/13_Main_Practice_Reveal.jpg', mask : undefined,
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
    pos: [(- 0.3), 0.3], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color((-1.0000, -1.0000, 0.0902)),  opacity: undefined,
    depth: -4.0 
  });
  
  sound_training_feedback = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_training_feedback.setVolume(1.0);
  sound_training_feedback.isPlaying = false;
  sound_training_feedback.isFinished = false;
  // Initialize components for Routine "main_start_screen"
  main_start_screenClock = new util.Clock();
  bg_mainstart_img = new visual.ImageStim({
    win : psychoJS.window,
    name : 'bg_mainstart_img', units : 'norm', 
    image : 'assets/images/14_Main_Test.jpg', mask : undefined,
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
  sound_mainstart = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_mainstart.setVolume(1.0);
  sound_mainstart.isPlaying = false;
  sound_mainstart.isFinished = false;
  // Initialize components for Routine "csv_selector_main"
  csv_selector_mainClock = new util.Clock();
  // Run 'Begin Experiment' code from pathway_construction_main
  // Define your variable
  concPathMain = 'sequences/a05/a05_listE.csv';
  
  // Make it available globally (Builder-friendly)
  expInfo['concPathMain'] = concPathMain;
  // Initialize components for Routine "main_fixation"
  main_fixationClock = new util.Clock();
  bg_main_fix = new visual.ImageStim({
    win : psychoJS.window,
    name : 'bg_main_fix', units : 'norm', 
    image : 'assets/images/9_Main_Practice.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [2, 2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  polygon_main = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon_main', 
    vertices: 'cross', size:[0.3, 0.3],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 0.5, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color('black'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -1, 
    interpolate: true, 
  });
  
  // Run 'Begin Experiment' code from jitter_main
  expInfo['fixDuration'] = 0.8 + Math.random() * 0.4;
  // Initialize components for Routine "main_mask"
  main_maskClock = new util.Clock();
  bg_trial_mask_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'bg_trial_mask_2', units : 'norm', 
    image : 'assets/images/9_Main_Practice.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [2, 2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "main_stimulus_presentation"
  main_stimulus_presentationClock = new util.Clock();
  bg_main_stimpres = new visual.ImageStim({
    win : psychoJS.window,
    name : 'bg_main_stimpres', units : 'norm', 
    image : 'assets/images/9_Main_Practice.jpg', mask : undefined,
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
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [2, 2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
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
    texRes : 128.0, interpolate : true, depth : -2.0 
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
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  main_yesno_key_response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  main_yesno_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  main_yesno_mouse.mouseClock = new util.Clock();
  // Run 'Begin Experiment' code from main_yesno_button_placement
  btn_yesno_yes_main.pos = [w/4, -h/6];
  btn_yesno_no_main.pos = [-w/4, -h/6];
  sound_main_yesno = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_main_yesno.setVolume(1.0);
  sound_main_yesno.isPlaying = false;
  sound_main_yesno.isFinished = false;
  // Initialize components for Routine "main_written_response"
  main_written_responseClock = new util.Clock();
  bg_main_written = new visual.ImageStim({
    win : psychoJS.window,
    name : 'bg_main_written', units : 'norm', 
    image : 'assets/images/18_Main_Test.jpg', mask : undefined,
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
  sound_main_written = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_main_written.setVolume(1.0);
  sound_main_written.isPlaying = false;
  sound_main_written.isFinished = false;
  // Initialize components for Routine "main_feedback"
  main_feedbackClock = new util.Clock();
  bg_feedback_main = new visual.ImageStim({
    win : psychoJS.window,
    name : 'bg_feedback_main', units : 'norm', 
    image : 'assets/images/19_Main_Test_Reveal.jpg', mask : undefined,
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
    pos: [(- 0.3), 0.3], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color((-1.0000, -1.0000, 0.0902)),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  bg_goodbye_img = new visual.ImageStim({
    win : psychoJS.window,
    name : 'bg_goodbye_img', units : 'norm', 
    image : 'assets/images/20_Main_Goodbye.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [2, 2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  sound_1 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_1.setVolume(1.0);
  sound_1.isPlaying = false;
  sound_1.isFinished = false;
  // Initialize components for Routine "binoc_find"
  binoc_findClock = new util.Clock();
  bg_binocfind_img = new visual.ImageStim({
    win : psychoJS.window,
    name : 'bg_binocfind_img', units : 'norm', 
    image : 'assets/images/21_Main_ALT_LeadtoMIC.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [2, 2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  btn_binocfind_img = new visual.ImageStim({
    win : psychoJS.window,
    name : 'btn_binocfind_img', units : 'pix', 
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
  click_binocfind_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  click_binocfind_mouse.mouseClock = new util.Clock();
  // Run 'Begin Experiment' code from binocfind_screen_button_placement
  btn_binocfind_img.pos = [w/3, -h/3];  // bottom-right third center
  sound_binoc_find = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_binoc_find.setVolume(1.0);
  sound_binoc_find.isPlaying = false;
  sound_binoc_find.isFinished = false;
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var outer_csv_selectorMaxDurationReached;
var outer_csv_selectorMaxDuration;
var outer_csv_selectorComponents;
function outer_csv_selectorRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'outer_csv_selector' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    outer_csv_selectorClock.reset();
    routineTimer.reset();
    outer_csv_selectorMaxDurationReached = false;
    // update component parameters for each repeat
    
    
    psychoJS.experiment.addData('outer_csv_selector.started', globalClock.getTime());
    outer_csv_selectorMaxDuration = null
    // keep track of which components have finished
    outer_csv_selectorComponents = [];
    
    outer_csv_selectorComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function outer_csv_selectorRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'outer_csv_selector' ---
    // get current time
    t = outer_csv_selectorClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
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
    outer_csv_selectorComponents.forEach( function(thisComponent) {
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


function outer_csv_selectorRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'outer_csv_selector' ---
    outer_csv_selectorComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('outer_csv_selector.stopped', globalClock.getTime());
    // the Routine "outer_csv_selector" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var start_screenMaxDurationReached;
var gotValidClick;
var start_screenMaxDuration;
var start_screenComponents;
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


var prevButtonState;
var _mouseButtons;
var _mouseXYs;
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


var welcome_screenMaxDurationReached;
var maxDurationReached;
var welcome_screenMaxDuration;
var welcome_screenComponents;
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
    sound_welcome.isFinished = false;
    sound_welcome.setValue('assets/sounds/Main_1.wav');
    sound_welcome.setVolume(1.0);
    psychoJS.experiment.addData('welcome_screen.started', globalClock.getTime());
    // skip this Routine if its 'Skip if' condition is True
    continueRoutine = continueRoutine && !((expInfo['taskOrder'] == 2));
    maxDurationReached = false
    welcome_screenMaxDuration = null
    // keep track of which components have finished
    welcome_screenComponents = [];
    welcome_screenComponents.push(bg_welcome_img);
    welcome_screenComponents.push(btn_welcome_img);
    welcome_screenComponents.push(click_welcome_mouse);
    welcome_screenComponents.push(sound_welcome);
    
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
    if (sound_welcome.status === STARTED) {
        sound_welcome.isPlaying = true;
        if (t >= (sound_welcome.getDuration() + sound_welcome.tStart)) {
            sound_welcome.isFinished = true;
        }
    }
    // start/stop sound_welcome
    if (t >= 0.0 && sound_welcome.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_welcome.tStart = t;  // (not accounting for frame time here)
      sound_welcome.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_welcome.play(); });  // screen flip
      sound_welcome.status = PsychoJS.Status.STARTED;
    }
    if (sound_welcome.status === PsychoJS.Status.STARTED && Boolean(false) || sound_welcome.isFinished) {
      // keep track of stop time/frame for later
      sound_welcome.tStop = t;  // not accounting for scr refresh
      sound_welcome.frameNStop = frameN;  // exact frame index
      // update status
      sound_welcome.status = PsychoJS.Status.FINISHED;
      // stop playback
      sound_welcome.stop();
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
    
    sound_welcome.stop();  // ensure sound has stopped at end of Routine
    // the Routine "welcome_screen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var library_checkMaxDurationReached;
var library_checkMaxDuration;
var library_checkComponents;
function library_checkRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'library_check' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    library_checkClock.reset();
    routineTimer.reset();
    library_checkMaxDurationReached = false;
    // update component parameters for each repeat
    // setup some python lists for storing info about the click_libfirst1_mouse
    // current position of the mouse:
    click_libfirst1_mouse.x = [];
    click_libfirst1_mouse.y = [];
    click_libfirst1_mouse.leftButton = [];
    click_libfirst1_mouse.midButton = [];
    click_libfirst1_mouse.rightButton = [];
    click_libfirst1_mouse.time = [];
    click_libfirst1_mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    sound_library1.isFinished = false;
    sound_library1.setValue('assets/sounds/Main_2.wav');
    sound_library1.setVolume(1.0);
    psychoJS.experiment.addData('library_check.started', globalClock.getTime());
    // skip this Routine if its 'Skip if' condition is True
    continueRoutine = continueRoutine && !((expInfo['taskOrder'] == 2));
    maxDurationReached = false
    library_checkMaxDuration = null
    // keep track of which components have finished
    library_checkComponents = [];
    library_checkComponents.push(bg_library1_img);
    library_checkComponents.push(btn_libfirst1_img);
    library_checkComponents.push(click_libfirst1_mouse);
    library_checkComponents.push(sound_library1);
    
    library_checkComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function library_checkRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'library_check' ---
    // get current time
    t = library_checkClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *bg_library1_img* updates
    if (t >= 0.0 && bg_library1_img.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bg_library1_img.tStart = t;  // (not accounting for frame time here)
      bg_library1_img.frameNStart = frameN;  // exact frame index
      
      bg_library1_img.setAutoDraw(true);
    }
    
    
    // if bg_library1_img is active this frame...
    if (bg_library1_img.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *btn_libfirst1_img* updates
    if (t >= 0.0 && btn_libfirst1_img.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      btn_libfirst1_img.tStart = t;  // (not accounting for frame time here)
      btn_libfirst1_img.frameNStart = frameN;  // exact frame index
      
      btn_libfirst1_img.setAutoDraw(true);
    }
    
    
    // if btn_libfirst1_img is active this frame...
    if (btn_libfirst1_img.status === PsychoJS.Status.STARTED) {
    }
    
    // *click_libfirst1_mouse* updates
    if (t >= 0.0 && click_libfirst1_mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      click_libfirst1_mouse.tStart = t;  // (not accounting for frame time here)
      click_libfirst1_mouse.frameNStart = frameN;  // exact frame index
      
      click_libfirst1_mouse.status = PsychoJS.Status.STARTED;
      click_libfirst1_mouse.mouseClock.reset();
      prevButtonState = click_libfirst1_mouse.getPressed();  // if button is down already this ISN'T a new click
    }
    
    // if click_libfirst1_mouse is active this frame...
    if (click_libfirst1_mouse.status === PsychoJS.Status.STARTED) {
      _mouseButtons = click_libfirst1_mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          click_libfirst1_mouse.clickableObjects = eval(btn_libfirst1_img)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(click_libfirst1_mouse.clickableObjects)) {
              click_libfirst1_mouse.clickableObjects = [click_libfirst1_mouse.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of click_libfirst1_mouse.clickableObjects) {
              if (obj.contains(click_libfirst1_mouse)) {
                  gotValidClick = true;
                  click_libfirst1_mouse.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              click_libfirst1_mouse.clicked_name.push(null);
          }
          _mouseXYs = click_libfirst1_mouse.getPos();
          click_libfirst1_mouse.x.push(_mouseXYs[0]);
          click_libfirst1_mouse.y.push(_mouseXYs[1]);
          click_libfirst1_mouse.leftButton.push(_mouseButtons[0]);
          click_libfirst1_mouse.midButton.push(_mouseButtons[1]);
          click_libfirst1_mouse.rightButton.push(_mouseButtons[2]);
          click_libfirst1_mouse.time.push(click_libfirst1_mouse.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    if (sound_library1.status === STARTED) {
        sound_library1.isPlaying = true;
        if (t >= (sound_library1.getDuration() + sound_library1.tStart)) {
            sound_library1.isFinished = true;
        }
    }
    // start/stop sound_library1
    if (t >= 0.0 && sound_library1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_library1.tStart = t;  // (not accounting for frame time here)
      sound_library1.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_library1.play(); });  // screen flip
      sound_library1.status = PsychoJS.Status.STARTED;
    }
    if (sound_library1.status === PsychoJS.Status.STARTED && Boolean(false) || sound_library1.isFinished) {
      // keep track of stop time/frame for later
      sound_library1.tStop = t;  // not accounting for scr refresh
      sound_library1.frameNStop = frameN;  // exact frame index
      // update status
      sound_library1.status = PsychoJS.Status.FINISHED;
      // stop playback
      sound_library1.stop();
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
    library_checkComponents.forEach( function(thisComponent) {
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


function library_checkRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'library_check' ---
    library_checkComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('library_check.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('click_libfirst1_mouse.x', click_libfirst1_mouse.x);
    psychoJS.experiment.addData('click_libfirst1_mouse.y', click_libfirst1_mouse.y);
    psychoJS.experiment.addData('click_libfirst1_mouse.leftButton', click_libfirst1_mouse.leftButton);
    psychoJS.experiment.addData('click_libfirst1_mouse.midButton', click_libfirst1_mouse.midButton);
    psychoJS.experiment.addData('click_libfirst1_mouse.rightButton', click_libfirst1_mouse.rightButton);
    psychoJS.experiment.addData('click_libfirst1_mouse.time', click_libfirst1_mouse.time);
    psychoJS.experiment.addData('click_libfirst1_mouse.clicked_name', click_libfirst1_mouse.clicked_name);
    
    sound_library1.stop();  // ensure sound has stopped at end of Routine
    // the Routine "library_check" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var library_entryMaxDurationReached;
var library_entryMaxDuration;
var library_entryComponents;
function library_entryRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'library_entry' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    library_entryClock.reset();
    routineTimer.reset();
    library_entryMaxDurationReached = false;
    // update component parameters for each repeat
    // setup some python lists for storing info about the click_libfirst2_mouse
    // current position of the mouse:
    click_libfirst2_mouse.x = [];
    click_libfirst2_mouse.y = [];
    click_libfirst2_mouse.leftButton = [];
    click_libfirst2_mouse.midButton = [];
    click_libfirst2_mouse.rightButton = [];
    click_libfirst2_mouse.time = [];
    click_libfirst2_mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    sound_library2.isFinished = false;
    sound_library2.setValue('assets/sounds/Main_3.wav');
    sound_library2.setVolume(1.0);
    psychoJS.experiment.addData('library_entry.started', globalClock.getTime());
    // skip this Routine if its 'Skip if' condition is True
    continueRoutine = continueRoutine && !((expInfo['taskOrder'] == 2));
    maxDurationReached = false
    library_entryMaxDuration = null
    // keep track of which components have finished
    library_entryComponents = [];
    library_entryComponents.push(bg_library2_img);
    library_entryComponents.push(btn_libfirst2_img);
    library_entryComponents.push(click_libfirst2_mouse);
    library_entryComponents.push(sound_library2);
    
    library_entryComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function library_entryRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'library_entry' ---
    // get current time
    t = library_entryClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *bg_library2_img* updates
    if (t >= 0.0 && bg_library2_img.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bg_library2_img.tStart = t;  // (not accounting for frame time here)
      bg_library2_img.frameNStart = frameN;  // exact frame index
      
      bg_library2_img.setAutoDraw(true);
    }
    
    
    // if bg_library2_img is active this frame...
    if (bg_library2_img.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *btn_libfirst2_img* updates
    if (t >= 0.0 && btn_libfirst2_img.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      btn_libfirst2_img.tStart = t;  // (not accounting for frame time here)
      btn_libfirst2_img.frameNStart = frameN;  // exact frame index
      
      btn_libfirst2_img.setAutoDraw(true);
    }
    
    
    // if btn_libfirst2_img is active this frame...
    if (btn_libfirst2_img.status === PsychoJS.Status.STARTED) {
    }
    
    // *click_libfirst2_mouse* updates
    if (t >= 0.0 && click_libfirst2_mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      click_libfirst2_mouse.tStart = t;  // (not accounting for frame time here)
      click_libfirst2_mouse.frameNStart = frameN;  // exact frame index
      
      click_libfirst2_mouse.status = PsychoJS.Status.STARTED;
      click_libfirst2_mouse.mouseClock.reset();
      prevButtonState = click_libfirst2_mouse.getPressed();  // if button is down already this ISN'T a new click
    }
    
    // if click_libfirst2_mouse is active this frame...
    if (click_libfirst2_mouse.status === PsychoJS.Status.STARTED) {
      _mouseButtons = click_libfirst2_mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          click_libfirst2_mouse.clickableObjects = eval(btn_libfirst2_img)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(click_libfirst2_mouse.clickableObjects)) {
              click_libfirst2_mouse.clickableObjects = [click_libfirst2_mouse.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of click_libfirst2_mouse.clickableObjects) {
              if (obj.contains(click_libfirst2_mouse)) {
                  gotValidClick = true;
                  click_libfirst2_mouse.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              click_libfirst2_mouse.clicked_name.push(null);
          }
          _mouseXYs = click_libfirst2_mouse.getPos();
          click_libfirst2_mouse.x.push(_mouseXYs[0]);
          click_libfirst2_mouse.y.push(_mouseXYs[1]);
          click_libfirst2_mouse.leftButton.push(_mouseButtons[0]);
          click_libfirst2_mouse.midButton.push(_mouseButtons[1]);
          click_libfirst2_mouse.rightButton.push(_mouseButtons[2]);
          click_libfirst2_mouse.time.push(click_libfirst2_mouse.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    if (sound_library2.status === STARTED) {
        sound_library2.isPlaying = true;
        if (t >= (sound_library2.getDuration() + sound_library2.tStart)) {
            sound_library2.isFinished = true;
        }
    }
    // start/stop sound_library2
    if (t >= 0.0 && sound_library2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_library2.tStart = t;  // (not accounting for frame time here)
      sound_library2.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_library2.play(); });  // screen flip
      sound_library2.status = PsychoJS.Status.STARTED;
    }
    if (sound_library2.status === PsychoJS.Status.STARTED && Boolean(false) || sound_library2.isFinished) {
      // keep track of stop time/frame for later
      sound_library2.tStop = t;  // not accounting for scr refresh
      sound_library2.frameNStop = frameN;  // exact frame index
      // update status
      sound_library2.status = PsychoJS.Status.FINISHED;
      // stop playback
      sound_library2.stop();
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
    library_entryComponents.forEach( function(thisComponent) {
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


function library_entryRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'library_entry' ---
    library_entryComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('library_entry.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('click_libfirst2_mouse.x', click_libfirst2_mouse.x);
    psychoJS.experiment.addData('click_libfirst2_mouse.y', click_libfirst2_mouse.y);
    psychoJS.experiment.addData('click_libfirst2_mouse.leftButton', click_libfirst2_mouse.leftButton);
    psychoJS.experiment.addData('click_libfirst2_mouse.midButton', click_libfirst2_mouse.midButton);
    psychoJS.experiment.addData('click_libfirst2_mouse.rightButton', click_libfirst2_mouse.rightButton);
    psychoJS.experiment.addData('click_libfirst2_mouse.time', click_libfirst2_mouse.time);
    psychoJS.experiment.addData('click_libfirst2_mouse.clicked_name', click_libfirst2_mouse.clicked_name);
    
    sound_library2.stop();  // ensure sound has stopped at end of Routine
    // the Routine "library_entry" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var library_seenMaxDurationReached;
var library_seenMaxDuration;
var library_seenComponents;
function library_seenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'library_seen' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    library_seenClock.reset();
    routineTimer.reset();
    library_seenMaxDurationReached = false;
    // update component parameters for each repeat
    // setup some python lists for storing info about the click_libsecond_mouse
    // current position of the mouse:
    click_libsecond_mouse.x = [];
    click_libsecond_mouse.y = [];
    click_libsecond_mouse.leftButton = [];
    click_libsecond_mouse.midButton = [];
    click_libsecond_mouse.rightButton = [];
    click_libsecond_mouse.time = [];
    click_libsecond_mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    sound_library3.isFinished = false;
    sound_library3.setValue('assets/sounds/Main_2_ALT.wav');
    sound_library3.setVolume(1.0);
    psychoJS.experiment.addData('library_seen.started', globalClock.getTime());
    // skip this Routine if its 'Skip if' condition is True
    continueRoutine = continueRoutine && !((expInfo['taskOrder'] == 1));
    maxDurationReached = false
    library_seenMaxDuration = null
    // keep track of which components have finished
    library_seenComponents = [];
    library_seenComponents.push(bg_library3_img);
    library_seenComponents.push(btn_libsecond_img);
    library_seenComponents.push(click_libsecond_mouse);
    library_seenComponents.push(sound_library3);
    
    library_seenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function library_seenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'library_seen' ---
    // get current time
    t = library_seenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *bg_library3_img* updates
    if (t >= 0.0 && bg_library3_img.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bg_library3_img.tStart = t;  // (not accounting for frame time here)
      bg_library3_img.frameNStart = frameN;  // exact frame index
      
      bg_library3_img.setAutoDraw(true);
    }
    
    
    // if bg_library3_img is active this frame...
    if (bg_library3_img.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *btn_libsecond_img* updates
    if (t >= 0.0 && btn_libsecond_img.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      btn_libsecond_img.tStart = t;  // (not accounting for frame time here)
      btn_libsecond_img.frameNStart = frameN;  // exact frame index
      
      btn_libsecond_img.setAutoDraw(true);
    }
    
    
    // if btn_libsecond_img is active this frame...
    if (btn_libsecond_img.status === PsychoJS.Status.STARTED) {
    }
    
    // *click_libsecond_mouse* updates
    if (t >= 0.0 && click_libsecond_mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      click_libsecond_mouse.tStart = t;  // (not accounting for frame time here)
      click_libsecond_mouse.frameNStart = frameN;  // exact frame index
      
      click_libsecond_mouse.status = PsychoJS.Status.STARTED;
      click_libsecond_mouse.mouseClock.reset();
      prevButtonState = click_libsecond_mouse.getPressed();  // if button is down already this ISN'T a new click
    }
    
    // if click_libsecond_mouse is active this frame...
    if (click_libsecond_mouse.status === PsychoJS.Status.STARTED) {
      _mouseButtons = click_libsecond_mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          click_libsecond_mouse.clickableObjects = eval(btn_libsecond_img)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(click_libsecond_mouse.clickableObjects)) {
              click_libsecond_mouse.clickableObjects = [click_libsecond_mouse.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of click_libsecond_mouse.clickableObjects) {
              if (obj.contains(click_libsecond_mouse)) {
                  gotValidClick = true;
                  click_libsecond_mouse.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              click_libsecond_mouse.clicked_name.push(null);
          }
          _mouseXYs = click_libsecond_mouse.getPos();
          click_libsecond_mouse.x.push(_mouseXYs[0]);
          click_libsecond_mouse.y.push(_mouseXYs[1]);
          click_libsecond_mouse.leftButton.push(_mouseButtons[0]);
          click_libsecond_mouse.midButton.push(_mouseButtons[1]);
          click_libsecond_mouse.rightButton.push(_mouseButtons[2]);
          click_libsecond_mouse.time.push(click_libsecond_mouse.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    if (sound_library3.status === STARTED) {
        sound_library3.isPlaying = true;
        if (t >= (sound_library3.getDuration() + sound_library3.tStart)) {
            sound_library3.isFinished = true;
        }
    }
    // start/stop sound_library3
    if (t >= 0.0 && sound_library3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_library3.tStart = t;  // (not accounting for frame time here)
      sound_library3.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_library3.play(); });  // screen flip
      sound_library3.status = PsychoJS.Status.STARTED;
    }
    if (sound_library3.status === PsychoJS.Status.STARTED && Boolean(false) || sound_library3.isFinished) {
      // keep track of stop time/frame for later
      sound_library3.tStop = t;  // not accounting for scr refresh
      sound_library3.frameNStop = frameN;  // exact frame index
      // update status
      sound_library3.status = PsychoJS.Status.FINISHED;
      // stop playback
      sound_library3.stop();
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
    library_seenComponents.forEach( function(thisComponent) {
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


function library_seenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'library_seen' ---
    library_seenComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('library_seen.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('click_libsecond_mouse.x', click_libsecond_mouse.x);
    psychoJS.experiment.addData('click_libsecond_mouse.y', click_libsecond_mouse.y);
    psychoJS.experiment.addData('click_libsecond_mouse.leftButton', click_libsecond_mouse.leftButton);
    psychoJS.experiment.addData('click_libsecond_mouse.midButton', click_libsecond_mouse.midButton);
    psychoJS.experiment.addData('click_libsecond_mouse.rightButton', click_libsecond_mouse.rightButton);
    psychoJS.experiment.addData('click_libsecond_mouse.time', click_libsecond_mouse.time);
    psychoJS.experiment.addData('click_libsecond_mouse.clicked_name', click_libsecond_mouse.clicked_name);
    
    sound_library3.stop();  // ensure sound has stopped at end of Routine
    // the Routine "library_seen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var rules_start_screenMaxDurationReached;
var rules_start_screenMaxDuration;
var rules_start_screenComponents;
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
    sound_rulesstart.isFinished = false;
    sound_rulesstart.setValue('assets/sounds/Main_4.wav');
    sound_rulesstart.setVolume(1.0);
    psychoJS.experiment.addData('rules_start_screen.started', globalClock.getTime());
    rules_start_screenMaxDuration = null
    // keep track of which components have finished
    rules_start_screenComponents = [];
    rules_start_screenComponents.push(bg_rulesstart_img);
    rules_start_screenComponents.push(btn_rulesstart_img);
    rules_start_screenComponents.push(click_rulesstart_mouse);
    rules_start_screenComponents.push(sound_rulesstart);
    
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
    if (sound_rulesstart.status === STARTED) {
        sound_rulesstart.isPlaying = true;
        if (t >= (sound_rulesstart.getDuration() + sound_rulesstart.tStart)) {
            sound_rulesstart.isFinished = true;
        }
    }
    // start/stop sound_rulesstart
    if (t >= 0.0 && sound_rulesstart.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_rulesstart.tStart = t;  // (not accounting for frame time here)
      sound_rulesstart.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_rulesstart.play(); });  // screen flip
      sound_rulesstart.status = PsychoJS.Status.STARTED;
    }
    if (sound_rulesstart.status === PsychoJS.Status.STARTED && Boolean(false) || sound_rulesstart.isFinished) {
      // keep track of stop time/frame for later
      sound_rulesstart.tStop = t;  // not accounting for scr refresh
      sound_rulesstart.frameNStop = frameN;  // exact frame index
      // update status
      sound_rulesstart.status = PsychoJS.Status.FINISHED;
      // stop playback
      sound_rulesstart.stop();
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
    
    sound_rulesstart.stop();  // ensure sound has stopped at end of Routine
    // the Routine "rules_start_screen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var rules_01_screenMaxDurationReached;
var rules_01_screenMaxDuration;
var rules_01_screenComponents;
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
    sound_rules1.isFinished = false;
    sound_rules1.setValue('assets/sounds/Main_5.wav');
    sound_rules1.setVolume(1.0);
    psychoJS.experiment.addData('rules_01_screen.started', globalClock.getTime());
    rules_01_screenMaxDuration = null
    // keep track of which components have finished
    rules_01_screenComponents = [];
    rules_01_screenComponents.push(bg_rules01_img);
    rules_01_screenComponents.push(btn_rules01_img);
    rules_01_screenComponents.push(click_rules01_mouse);
    rules_01_screenComponents.push(sound_rules1);
    
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
    if (sound_rules1.status === STARTED) {
        sound_rules1.isPlaying = true;
        if (t >= (sound_rules1.getDuration() + sound_rules1.tStart)) {
            sound_rules1.isFinished = true;
        }
    }
    // start/stop sound_rules1
    if (t >= 0.0 && sound_rules1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_rules1.tStart = t;  // (not accounting for frame time here)
      sound_rules1.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_rules1.play(); });  // screen flip
      sound_rules1.status = PsychoJS.Status.STARTED;
    }
    if (sound_rules1.status === PsychoJS.Status.STARTED && Boolean(false) || sound_rules1.isFinished) {
      // keep track of stop time/frame for later
      sound_rules1.tStop = t;  // not accounting for scr refresh
      sound_rules1.frameNStop = frameN;  // exact frame index
      // update status
      sound_rules1.status = PsychoJS.Status.FINISHED;
      // stop playback
      sound_rules1.stop();
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
    
    sound_rules1.stop();  // ensure sound has stopped at end of Routine
    // the Routine "rules_01_screen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var rules_02_screenMaxDurationReached;
var rules_02_screenMaxDuration;
var rules_02_screenComponents;
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
    sound_rules2.isFinished = false;
    sound_rules2.setValue('assets/sounds/Main_6.wav');
    sound_rules2.setVolume(1.0);
    psychoJS.experiment.addData('rules_02_screen.started', globalClock.getTime());
    rules_02_screenMaxDuration = null
    // keep track of which components have finished
    rules_02_screenComponents = [];
    rules_02_screenComponents.push(bg_rules02_img);
    rules_02_screenComponents.push(btn_rules02_img);
    rules_02_screenComponents.push(click_rules02_mouse);
    rules_02_screenComponents.push(sound_rules2);
    
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
    if (sound_rules2.status === STARTED) {
        sound_rules2.isPlaying = true;
        if (t >= (sound_rules2.getDuration() + sound_rules2.tStart)) {
            sound_rules2.isFinished = true;
        }
    }
    // start/stop sound_rules2
    if (t >= 0.0 && sound_rules2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_rules2.tStart = t;  // (not accounting for frame time here)
      sound_rules2.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_rules2.play(); });  // screen flip
      sound_rules2.status = PsychoJS.Status.STARTED;
    }
    if (sound_rules2.status === PsychoJS.Status.STARTED && Boolean(false) || sound_rules2.isFinished) {
      // keep track of stop time/frame for later
      sound_rules2.tStop = t;  // not accounting for scr refresh
      sound_rules2.frameNStop = frameN;  // exact frame index
      // update status
      sound_rules2.status = PsychoJS.Status.FINISHED;
      // stop playback
      sound_rules2.stop();
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
    
    sound_rules2.stop();  // ensure sound has stopped at end of Routine
    // the Routine "rules_02_screen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_start_screenMaxDurationReached;
var trial_start_screenMaxDuration;
var trial_start_screenComponents;
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
    sound_trialstart.isFinished = false;
    sound_trialstart.setValue('assets/sounds/Main_7.wav');
    sound_trialstart.setVolume(1.0);
    psychoJS.experiment.addData('trial_start_screen.started', globalClock.getTime());
    trial_start_screenMaxDuration = null
    // keep track of which components have finished
    trial_start_screenComponents = [];
    trial_start_screenComponents.push(bg_trialstart_img);
    trial_start_screenComponents.push(btn_trialstart_img);
    trial_start_screenComponents.push(click_trialstart_mouse);
    trial_start_screenComponents.push(sound_trialstart);
    
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
    if (sound_trialstart.status === STARTED) {
        sound_trialstart.isPlaying = true;
        if (t >= (sound_trialstart.getDuration() + sound_trialstart.tStart)) {
            sound_trialstart.isFinished = true;
        }
    }
    // start/stop sound_trialstart
    if (t >= 0.0 && sound_trialstart.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_trialstart.tStart = t;  // (not accounting for frame time here)
      sound_trialstart.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_trialstart.play(); });  // screen flip
      sound_trialstart.status = PsychoJS.Status.STARTED;
    }
    if (sound_trialstart.status === PsychoJS.Status.STARTED && Boolean(false) || sound_trialstart.isFinished) {
      // keep track of stop time/frame for later
      sound_trialstart.tStop = t;  // not accounting for scr refresh
      sound_trialstart.frameNStop = frameN;  // exact frame index
      // update status
      sound_trialstart.status = PsychoJS.Status.FINISHED;
      // stop playback
      sound_trialstart.stop();
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
    
    sound_trialstart.stop();  // ensure sound has stopped at end of Routine
    // the Routine "trial_start_screen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var train_outer_loop;
function train_outer_loopLoopBegin(train_outer_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    train_outer_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, listPath, '0'),
      seed: undefined, name: 'train_outer_loop'
    });
    psychoJS.experiment.addLoop(train_outer_loop); // add the loop to the experiment
    currentLoop = train_outer_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    train_outer_loop.forEach(function() {
      snapshot = train_outer_loop.getSnapshot();
    
      train_outer_loopLoopScheduler.add(importConditions(snapshot));
      train_outer_loopLoopScheduler.add(csv_selectorRoutineBegin(snapshot));
      train_outer_loopLoopScheduler.add(csv_selectorRoutineEachFrame());
      train_outer_loopLoopScheduler.add(csv_selectorRoutineEnd(snapshot));
      const training_loopLoopScheduler = new Scheduler(psychoJS);
      train_outer_loopLoopScheduler.add(training_loopLoopBegin(training_loopLoopScheduler, snapshot));
      train_outer_loopLoopScheduler.add(training_loopLoopScheduler);
      train_outer_loopLoopScheduler.add(training_loopLoopEnd);
      train_outer_loopLoopScheduler.add(train_feedbackRoutineBegin(snapshot));
      train_outer_loopLoopScheduler.add(train_feedbackRoutineEachFrame());
      train_outer_loopLoopScheduler.add(train_feedbackRoutineEnd(snapshot));
      train_outer_loopLoopScheduler.add(train_outer_loopLoopEndIteration(train_outer_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var training_loop;
function training_loopLoopBegin(training_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    training_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: concPathTrain,
      seed: undefined, name: 'training_loop'
    });
    psychoJS.experiment.addLoop(training_loop); // add the loop to the experiment
    currentLoop = training_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    training_loop.forEach(function() {
      snapshot = training_loop.getSnapshot();
    
      training_loopLoopScheduler.add(importConditions(snapshot));
      training_loopLoopScheduler.add(train_fixationRoutineBegin(snapshot));
      training_loopLoopScheduler.add(train_fixationRoutineEachFrame());
      training_loopLoopScheduler.add(train_fixationRoutineEnd(snapshot));
      training_loopLoopScheduler.add(train_maskRoutineBegin(snapshot));
      training_loopLoopScheduler.add(train_maskRoutineEachFrame());
      training_loopLoopScheduler.add(train_maskRoutineEnd(snapshot));
      training_loopLoopScheduler.add(train_stimulus_presentationRoutineBegin(snapshot));
      training_loopLoopScheduler.add(train_stimulus_presentationRoutineEachFrame());
      training_loopLoopScheduler.add(train_stimulus_presentationRoutineEnd(snapshot));
      training_loopLoopScheduler.add(train_yesno_responseRoutineBegin(snapshot));
      training_loopLoopScheduler.add(train_yesno_responseRoutineEachFrame());
      training_loopLoopScheduler.add(train_yesno_responseRoutineEnd(snapshot));
      training_loopLoopScheduler.add(train_written_responseRoutineBegin(snapshot));
      training_loopLoopScheduler.add(train_written_responseRoutineEachFrame());
      training_loopLoopScheduler.add(train_written_responseRoutineEnd(snapshot));
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


async function train_outer_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(train_outer_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function train_outer_loopLoopEndIteration(scheduler, snapshot) {
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
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var main_outer_loop;
function main_outer_loopLoopBegin(main_outer_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    main_outer_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, listPath, '1:10'),
      seed: undefined, name: 'main_outer_loop'
    });
    psychoJS.experiment.addLoop(main_outer_loop); // add the loop to the experiment
    currentLoop = main_outer_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    main_outer_loop.forEach(function() {
      snapshot = main_outer_loop.getSnapshot();
    
      main_outer_loopLoopScheduler.add(importConditions(snapshot));
      main_outer_loopLoopScheduler.add(csv_selector_mainRoutineBegin(snapshot));
      main_outer_loopLoopScheduler.add(csv_selector_mainRoutineEachFrame());
      main_outer_loopLoopScheduler.add(csv_selector_mainRoutineEnd(snapshot));
      const main_loopLoopScheduler = new Scheduler(psychoJS);
      main_outer_loopLoopScheduler.add(main_loopLoopBegin(main_loopLoopScheduler, snapshot));
      main_outer_loopLoopScheduler.add(main_loopLoopScheduler);
      main_outer_loopLoopScheduler.add(main_loopLoopEnd);
      main_outer_loopLoopScheduler.add(main_feedbackRoutineBegin(snapshot));
      main_outer_loopLoopScheduler.add(main_feedbackRoutineEachFrame());
      main_outer_loopLoopScheduler.add(main_feedbackRoutineEnd(snapshot));
      main_outer_loopLoopScheduler.add(main_outer_loopLoopEndIteration(main_outer_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var main_loop;
function main_loopLoopBegin(main_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    main_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: concPathMain,
      seed: undefined, name: 'main_loop'
    });
    psychoJS.experiment.addLoop(main_loop); // add the loop to the experiment
    currentLoop = main_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    main_loop.forEach(function() {
      snapshot = main_loop.getSnapshot();
    
      main_loopLoopScheduler.add(importConditions(snapshot));
      main_loopLoopScheduler.add(main_fixationRoutineBegin(snapshot));
      main_loopLoopScheduler.add(main_fixationRoutineEachFrame());
      main_loopLoopScheduler.add(main_fixationRoutineEnd(snapshot));
      main_loopLoopScheduler.add(main_maskRoutineBegin(snapshot));
      main_loopLoopScheduler.add(main_maskRoutineEachFrame());
      main_loopLoopScheduler.add(main_maskRoutineEnd(snapshot));
      main_loopLoopScheduler.add(main_stimulus_presentationRoutineBegin(snapshot));
      main_loopLoopScheduler.add(main_stimulus_presentationRoutineEachFrame());
      main_loopLoopScheduler.add(main_stimulus_presentationRoutineEnd(snapshot));
      main_loopLoopScheduler.add(main_yesno_responseRoutineBegin(snapshot));
      main_loopLoopScheduler.add(main_yesno_responseRoutineEachFrame());
      main_loopLoopScheduler.add(main_yesno_responseRoutineEnd(snapshot));
      main_loopLoopScheduler.add(main_written_responseRoutineBegin(snapshot));
      main_loopLoopScheduler.add(main_written_responseRoutineEachFrame());
      main_loopLoopScheduler.add(main_written_responseRoutineEnd(snapshot));
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


async function main_outer_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(main_outer_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function main_outer_loopLoopEndIteration(scheduler, snapshot) {
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
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var csv_selectorMaxDurationReached;
var condDir;
var listFile;
var filename;
var csv_selectorMaxDuration;
var csv_selectorComponents;
function csv_selectorRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'csv_selector' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    csv_selectorClock.reset();
    routineTimer.reset();
    csv_selectorMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from pathway_construction_training
    // Ensure strings and trim whitespace
    condDir  = String(conceptno).trim();  // e.g., "a05"
    listFile = String(version).trim();    // e.g., "E"
    
    // Build the filename: "a05_listE.csv"
    filename = `${condDir}_list${listFile}.csv`;
    
    // Join URL-style path parts for PsychoJS/Pavlovia (use forward slashes)
    concPathTrain = ["sequences", condDir, filename].join("/");
    
    // Log to console and save into the data file
    console.log(`concPathTrain = ${concPathTrain}`);
    expInfo['concPathTrain'] = concPathTrain;
    
    psychoJS.experiment.addData('csv_selector.started', globalClock.getTime());
    csv_selectorMaxDuration = null
    // keep track of which components have finished
    csv_selectorComponents = [];
    
    csv_selectorComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function csv_selectorRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'csv_selector' ---
    // get current time
    t = csv_selectorClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
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
    csv_selectorComponents.forEach( function(thisComponent) {
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


function csv_selectorRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'csv_selector' ---
    csv_selectorComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('csv_selector.stopped', globalClock.getTime());
    // the Routine "csv_selector" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var train_fixationMaxDurationReached;
var train_fixationMaxDuration;
var train_fixationComponents;
function train_fixationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'train_fixation' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    train_fixationClock.reset();
    routineTimer.reset();
    train_fixationMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from jitter
    // duration between 0.8 and 1.2 seconds
    expInfo['fixDuration'] = 0.8 + Math.random() * 0.4;
    psychoJS.experiment.addData('train_fixation.started', globalClock.getTime());
    train_fixationMaxDuration = expInfo["fixDuration"]
    // keep track of which components have finished
    train_fixationComponents = [];
    train_fixationComponents.push(bg_trial_fix);
    train_fixationComponents.push(polygon);
    
    train_fixationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function train_fixationRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'train_fixation' ---
    // get current time
    t = train_fixationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // is it time to end the Routine? (based on local clock)
    if (t > train_fixationMaxDuration) {
        train_fixationMaxDurationReached = true
        continueRoutine = false
    }
    
    // *bg_trial_fix* updates
    if (t >= 0.0 && bg_trial_fix.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bg_trial_fix.tStart = t;  // (not accounting for frame time here)
      bg_trial_fix.frameNStart = frameN;  // exact frame index
      
      bg_trial_fix.setAutoDraw(true);
    }
    
    
    // if bg_trial_fix is active this frame...
    if (bg_trial_fix.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *polygon* updates
    if (t >= 0.0 && polygon.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon.tStart = t;  // (not accounting for frame time here)
      polygon.frameNStart = frameN;  // exact frame index
      
      polygon.setAutoDraw(true);
    }
    
    
    // if polygon is active this frame...
    if (polygon.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (polygon.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      polygon.tStop = t;  // not accounting for scr refresh
      polygon.frameNStop = frameN;  // exact frame index
      // update status
      polygon.status = PsychoJS.Status.FINISHED;
      polygon.setAutoDraw(false);
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
    train_fixationComponents.forEach( function(thisComponent) {
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


function train_fixationRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'train_fixation' ---
    train_fixationComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('train_fixation.stopped', globalClock.getTime());
    // the Routine "train_fixation" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var train_maskMaxDurationReached;
var train_maskMaxDuration;
var train_maskComponents;
function train_maskRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'train_mask' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    train_maskClock.reset();
    routineTimer.reset();
    train_maskMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('train_mask.started', globalClock.getTime());
    train_maskMaxDuration = 1
    // keep track of which components have finished
    train_maskComponents = [];
    train_maskComponents.push(bg_trial_mask);
    
    train_maskComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function train_maskRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'train_mask' ---
    // get current time
    t = train_maskClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // is it time to end the Routine? (based on local clock)
    if (t > train_maskMaxDuration) {
        train_maskMaxDurationReached = true
        continueRoutine = false
    }
    
    // *bg_trial_mask* updates
    if (t >= 0.0 && bg_trial_mask.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bg_trial_mask.tStart = t;  // (not accounting for frame time here)
      bg_trial_mask.frameNStart = frameN;  // exact frame index
      
      bg_trial_mask.setAutoDraw(true);
    }
    
    
    // if bg_trial_mask is active this frame...
    if (bg_trial_mask.status === PsychoJS.Status.STARTED) {
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
    train_maskComponents.forEach( function(thisComponent) {
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


function train_maskRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'train_mask' ---
    train_maskComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('train_mask.stopped', globalClock.getTime());
    // the Routine "train_mask" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var train_stimulus_presentationMaxDurationReached;
var _stop_training_allKeys;
var train_stimulus_presentationMaxDuration;
var train_stimulus_presentationComponents;
function train_stimulus_presentationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'train_stimulus_presentation' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    train_stimulus_presentationClock.reset();
    routineTimer.reset();
    train_stimulus_presentationMaxDurationReached = false;
    // update component parameters for each repeat
    stimulus_presentation_train.setImage(feature_file);
    stop_training.keys = undefined;
    stop_training.rt = undefined;
    _stop_training_allKeys = [];
    stop_training.keys = [];
    psychoJS.experiment.addData('train_stimulus_presentation.started', globalClock.getTime());
    train_stimulus_presentationMaxDuration = Number.parseFloat(expInfo["stimPresTime"])
    // keep track of which components have finished
    train_stimulus_presentationComponents = [];
    train_stimulus_presentationComponents.push(bg_trial_stimpres);
    train_stimulus_presentationComponents.push(stimulus_presentation_train);
    train_stimulus_presentationComponents.push(stop_training);
    
    train_stimulus_presentationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function train_stimulus_presentationRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'train_stimulus_presentation' ---
    // get current time
    t = train_stimulus_presentationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // is it time to end the Routine? (based on local clock)
    if (t > train_stimulus_presentationMaxDuration) {
        train_stimulus_presentationMaxDurationReached = true
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
    train_stimulus_presentationComponents.forEach( function(thisComponent) {
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


function train_stimulus_presentationRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'train_stimulus_presentation' ---
    train_stimulus_presentationComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('train_stimulus_presentation.stopped', globalClock.getTime());
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
    // the Routine "train_stimulus_presentation" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var train_yesno_responseMaxDurationReached;
var bgImage;
var soundYN;
var _trial_yesno_response_allKeys;
var train_yesno_responseMaxDuration;
var train_yesno_responseComponents;
function train_yesno_responseRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'train_yesno_response' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    train_yesno_responseClock.reset();
    routineTimer.reset();
    train_yesno_responseMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from training_yesno_bg_setting
    if (previousText[concept]) {
        bgImage = "assets/images/17_Main_Test.jpg";   // NOT empty
    } else {
        bgImage = "assets/images/16_Main_Test.jpg";   // empty
    }
    
    if (previousText[concept]) {
        soundYN = "assets/sounds/Main_8_c.wav";   // NOT empty
    } else {
        soundYN = "assets/sounds/Main_8_a.wav";   // empty
    }
    bg_trial_yesno.setImage(bgImage);
    sound_trial_yesno.isFinished = false;
    sound_trial_yesno.setValue(soundYN);
    sound_trial_yesno.secs=3;
    sound_trial_yesno.setVolume(1.0);
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
    psychoJS.experiment.addData('train_yesno_response.started', globalClock.getTime());
    train_yesno_responseMaxDuration = null
    // keep track of which components have finished
    train_yesno_responseComponents = [];
    train_yesno_responseComponents.push(bg_trial_yesno);
    train_yesno_responseComponents.push(btn_yesno_yes_img);
    train_yesno_responseComponents.push(btn_yesno_no_img);
    train_yesno_responseComponents.push(sound_trial_yesno);
    train_yesno_responseComponents.push(trial_yesno_response);
    train_yesno_responseComponents.push(click_yesno_mouse);
    
    train_yesno_responseComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function train_yesno_responseRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'train_yesno_response' ---
    // get current time
    t = train_yesno_responseClock.getTime();
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
    
    if (sound_trial_yesno.status === STARTED) {
        sound_trial_yesno.isPlaying = true;
        if (t >= (sound_trial_yesno.getDuration() + sound_trial_yesno.tStart)) {
            sound_trial_yesno.isFinished = true;
        }
    }
    // start/stop sound_trial_yesno
    if (t >= 0.1 && sound_trial_yesno.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_trial_yesno.tStart = t;  // (not accounting for frame time here)
      sound_trial_yesno.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_trial_yesno.play(); });  // screen flip
      sound_trial_yesno.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.1 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_trial_yesno.status === PsychoJS.Status.STARTED && t >= frameRemains || sound_trial_yesno.isFinished) {
      // keep track of stop time/frame for later
      sound_trial_yesno.tStop = t;  // not accounting for scr refresh
      sound_trial_yesno.frameNStop = frameN;  // exact frame index
      // update status
      sound_trial_yesno.status = PsychoJS.Status.FINISHED;
      // stop playback
      sound_trial_yesno.stop();
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
    train_yesno_responseComponents.forEach( function(thisComponent) {
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


var _lastKey;
var _yesButtonClicked;
var needTextInput;
function train_yesno_responseRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'train_yesno_response' ---
    train_yesno_responseComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('train_yesno_response.stopped', globalClock.getTime());
    sound_trial_yesno.stop();  // ensure sound has stopped at end of Routine
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
    
    // Run 'End Routine' code from training_button_placement
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
    // the Routine "train_yesno_response" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var train_written_responseMaxDurationReached;
var defaultText;
var train_written_responseMaxDuration;
var train_written_responseComponents;
function train_written_responseRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'train_written_response' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    train_written_responseClock.reset();
    routineTimer.reset();
    train_written_responseMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_whatconc
    // If the previous response wasn't 'y' or 'left', skip this routine
    if (!needTextInput) {
        continueRoutine = false;
    }
    
    defaultText = previousText[concept] || "";
    sound_train_written.isFinished = false;
    sound_train_written.setValue('assets/sounds/Main_8_b.wav');
    sound_train_written.secs=2;
    sound_train_written.setVolume(1.0);
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
    psychoJS.experiment.addData('train_written_response.started', globalClock.getTime());
    train_written_responseMaxDuration = null
    // keep track of which components have finished
    train_written_responseComponents = [];
    train_written_responseComponents.push(bg_trial_written);
    train_written_responseComponents.push(sound_train_written);
    train_written_responseComponents.push(textbox_response_training);
    train_written_responseComponents.push(click_written_mouse);
    train_written_responseComponents.push(btn_written_img);
    
    train_written_responseComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function train_written_responseRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'train_written_response' ---
    // get current time
    t = train_written_responseClock.getTime();
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
    
    if (sound_train_written.status === STARTED) {
        sound_train_written.isPlaying = true;
        if (t >= (sound_train_written.getDuration() + sound_train_written.tStart)) {
            sound_train_written.isFinished = true;
        }
    }
    // start/stop sound_train_written
    if (t >= 0.1 && sound_train_written.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_train_written.tStart = t;  // (not accounting for frame time here)
      sound_train_written.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_train_written.play(); });  // screen flip
      sound_train_written.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.1 + 2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sound_train_written.status === PsychoJS.Status.STARTED && t >= frameRemains || sound_train_written.isFinished) {
      // keep track of stop time/frame for later
      sound_train_written.tStop = t;  // not accounting for scr refresh
      sound_train_written.frameNStop = frameN;  // exact frame index
      // update status
      sound_train_written.status = PsychoJS.Status.FINISHED;
      // stop playback
      sound_train_written.stop();
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
    train_written_responseComponents.forEach( function(thisComponent) {
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


function train_written_responseRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'train_written_response' ---
    train_written_responseComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('train_written_response.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_whatconc
    previousText[concept] = textbox_response_training.text;
    sound_train_written.stop();  // ensure sound has stopped at end of Routine
    psychoJS.experiment.addData('textbox_response_training.text',textbox_response_training.text)
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('click_written_mouse.x', click_written_mouse.x);
    psychoJS.experiment.addData('click_written_mouse.y', click_written_mouse.y);
    psychoJS.experiment.addData('click_written_mouse.leftButton', click_written_mouse.leftButton);
    psychoJS.experiment.addData('click_written_mouse.midButton', click_written_mouse.midButton);
    psychoJS.experiment.addData('click_written_mouse.rightButton', click_written_mouse.rightButton);
    psychoJS.experiment.addData('click_written_mouse.time', click_written_mouse.time);
    psychoJS.experiment.addData('click_written_mouse.clicked_name', click_written_mouse.clicked_name);
    
    // the Routine "train_written_response" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var train_feedbackMaxDurationReached;
var train_feedbackMaxDuration;
var train_feedbackComponents;
function train_feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'train_feedback' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    train_feedbackClock.reset();
    routineTimer.reset();
    train_feedbackMaxDurationReached = false;
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
    sound_training_feedback.isFinished = false;
    sound_training_feedback.setValue('assets/sounds/Main_8_d.wav');
    sound_training_feedback.setVolume(1.0);
    psychoJS.experiment.addData('train_feedback.started', globalClock.getTime());
    train_feedbackMaxDuration = 3
    // keep track of which components have finished
    train_feedbackComponents = [];
    train_feedbackComponents.push(bg_feedback_train);
    train_feedbackComponents.push(btn_feedback_img);
    train_feedbackComponents.push(click_feedback_mouse);
    train_feedbackComponents.push(feedback_concept);
    train_feedbackComponents.push(sound_training_feedback);
    
    train_feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function train_feedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'train_feedback' ---
    // get current time
    t = train_feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // is it time to end the Routine? (based on local clock)
    if (t > train_feedbackMaxDuration) {
        train_feedbackMaxDurationReached = true
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
    
    if (sound_training_feedback.status === STARTED) {
        sound_training_feedback.isPlaying = true;
        if (t >= (sound_training_feedback.getDuration() + sound_training_feedback.tStart)) {
            sound_training_feedback.isFinished = true;
        }
    }
    // start/stop sound_training_feedback
    if (t >= 0.0 && sound_training_feedback.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_training_feedback.tStart = t;  // (not accounting for frame time here)
      sound_training_feedback.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_training_feedback.play(); });  // screen flip
      sound_training_feedback.status = PsychoJS.Status.STARTED;
    }
    if (sound_training_feedback.status === PsychoJS.Status.STARTED && Boolean(false) || sound_training_feedback.isFinished) {
      // keep track of stop time/frame for later
      sound_training_feedback.tStop = t;  // not accounting for scr refresh
      sound_training_feedback.frameNStop = frameN;  // exact frame index
      // update status
      sound_training_feedback.status = PsychoJS.Status.FINISHED;
      // stop playback
      sound_training_feedback.stop();
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
    train_feedbackComponents.forEach( function(thisComponent) {
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


function train_feedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'train_feedback' ---
    train_feedbackComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('train_feedback.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('click_feedback_mouse.x', click_feedback_mouse.x);
    psychoJS.experiment.addData('click_feedback_mouse.y', click_feedback_mouse.y);
    psychoJS.experiment.addData('click_feedback_mouse.leftButton', click_feedback_mouse.leftButton);
    psychoJS.experiment.addData('click_feedback_mouse.midButton', click_feedback_mouse.midButton);
    psychoJS.experiment.addData('click_feedback_mouse.rightButton', click_feedback_mouse.rightButton);
    psychoJS.experiment.addData('click_feedback_mouse.time', click_feedback_mouse.time);
    psychoJS.experiment.addData('click_feedback_mouse.clicked_name', click_feedback_mouse.clicked_name);
    
    sound_training_feedback.stop();  // ensure sound has stopped at end of Routine
    // the Routine "train_feedback" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var main_start_screenMaxDurationReached;
var main_start_screenMaxDuration;
var main_start_screenComponents;
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
    sound_mainstart.isFinished = false;
    sound_mainstart.setValue('assets/sounds/Main_9.wav');
    sound_mainstart.setVolume(1.0);
    psychoJS.experiment.addData('main_start_screen.started', globalClock.getTime());
    main_start_screenMaxDuration = null
    // keep track of which components have finished
    main_start_screenComponents = [];
    main_start_screenComponents.push(bg_mainstart_img);
    main_start_screenComponents.push(btn_mainstart_img);
    main_start_screenComponents.push(click_mainstart_mouse);
    main_start_screenComponents.push(sound_mainstart);
    
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
    if (sound_mainstart.status === STARTED) {
        sound_mainstart.isPlaying = true;
        if (t >= (sound_mainstart.getDuration() + sound_mainstart.tStart)) {
            sound_mainstart.isFinished = true;
        }
    }
    // start/stop sound_mainstart
    if (t >= 0.0 && sound_mainstart.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_mainstart.tStart = t;  // (not accounting for frame time here)
      sound_mainstart.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_mainstart.play(); });  // screen flip
      sound_mainstart.status = PsychoJS.Status.STARTED;
    }
    if (sound_mainstart.status === PsychoJS.Status.STARTED && Boolean(false) || sound_mainstart.isFinished) {
      // keep track of stop time/frame for later
      sound_mainstart.tStop = t;  // not accounting for scr refresh
      sound_mainstart.frameNStop = frameN;  // exact frame index
      // update status
      sound_mainstart.status = PsychoJS.Status.FINISHED;
      // stop playback
      sound_mainstart.stop();
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
    
    sound_mainstart.stop();  // ensure sound has stopped at end of Routine
    // the Routine "main_start_screen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var csv_selector_mainMaxDurationReached;
var csv_selector_mainMaxDuration;
var csv_selector_mainComponents;
function csv_selector_mainRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'csv_selector_main' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    csv_selector_mainClock.reset();
    routineTimer.reset();
    csv_selector_mainMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from pathway_construction_main
    // Ensure strings and trim whitespace
    condDir  = String(conceptno).trim();  // e.g., "a05"
    listFile = String(version).trim();    // e.g., "E"
    
    // Build the filename: "a05_listE.csv"
    filename = `${condDir}_list${listFile}.csv`;
    
    // Join URL-style path parts for PsychoJS/Pavlovia (use forward slashes)
    concPathMain = ["sequences", condDir, filename].join("/");
    
    // Log to console and save into the data file
    console.log(`concPathMain = ${concPathMain}`);
    expInfo['concPathMain'] = concPathMain;
    
    psychoJS.experiment.addData('csv_selector_main.started', globalClock.getTime());
    csv_selector_mainMaxDuration = null
    // keep track of which components have finished
    csv_selector_mainComponents = [];
    
    csv_selector_mainComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function csv_selector_mainRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'csv_selector_main' ---
    // get current time
    t = csv_selector_mainClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
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
    csv_selector_mainComponents.forEach( function(thisComponent) {
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


function csv_selector_mainRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'csv_selector_main' ---
    csv_selector_mainComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('csv_selector_main.stopped', globalClock.getTime());
    // the Routine "csv_selector_main" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var main_fixationMaxDurationReached;
var main_fixationMaxDuration;
var main_fixationComponents;
function main_fixationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'main_fixation' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    main_fixationClock.reset();
    routineTimer.reset();
    main_fixationMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from jitter_main
    // duration between 0.8 and 1.2 seconds
    expInfo['fixDuration'] = 0.8 + Math.random() * 0.4;
    psychoJS.experiment.addData('main_fixation.started', globalClock.getTime());
    main_fixationMaxDuration = expInfo["fixDuration"]
    // keep track of which components have finished
    main_fixationComponents = [];
    main_fixationComponents.push(bg_main_fix);
    main_fixationComponents.push(polygon_main);
    
    main_fixationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function main_fixationRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'main_fixation' ---
    // get current time
    t = main_fixationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // is it time to end the Routine? (based on local clock)
    if (t > main_fixationMaxDuration) {
        main_fixationMaxDurationReached = true
        continueRoutine = false
    }
    
    // *bg_main_fix* updates
    if (t >= 0.0 && bg_main_fix.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bg_main_fix.tStart = t;  // (not accounting for frame time here)
      bg_main_fix.frameNStart = frameN;  // exact frame index
      
      bg_main_fix.setAutoDraw(true);
    }
    
    
    // if bg_main_fix is active this frame...
    if (bg_main_fix.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *polygon_main* updates
    if (t >= 0.0 && polygon_main.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_main.tStart = t;  // (not accounting for frame time here)
      polygon_main.frameNStart = frameN;  // exact frame index
      
      polygon_main.setAutoDraw(true);
    }
    
    
    // if polygon_main is active this frame...
    if (polygon_main.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (polygon_main.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      polygon_main.tStop = t;  // not accounting for scr refresh
      polygon_main.frameNStop = frameN;  // exact frame index
      // update status
      polygon_main.status = PsychoJS.Status.FINISHED;
      polygon_main.setAutoDraw(false);
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
    main_fixationComponents.forEach( function(thisComponent) {
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


function main_fixationRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'main_fixation' ---
    main_fixationComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('main_fixation.stopped', globalClock.getTime());
    // the Routine "main_fixation" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var main_maskMaxDurationReached;
var main_maskMaxDuration;
var main_maskComponents;
function main_maskRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'main_mask' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    main_maskClock.reset();
    routineTimer.reset();
    main_maskMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('main_mask.started', globalClock.getTime());
    main_maskMaxDuration = 1
    // keep track of which components have finished
    main_maskComponents = [];
    main_maskComponents.push(bg_trial_mask_2);
    
    main_maskComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function main_maskRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'main_mask' ---
    // get current time
    t = main_maskClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // is it time to end the Routine? (based on local clock)
    if (t > main_maskMaxDuration) {
        main_maskMaxDurationReached = true
        continueRoutine = false
    }
    
    // *bg_trial_mask_2* updates
    if (t >= 0.0 && bg_trial_mask_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bg_trial_mask_2.tStart = t;  // (not accounting for frame time here)
      bg_trial_mask_2.frameNStart = frameN;  // exact frame index
      
      bg_trial_mask_2.setAutoDraw(true);
    }
    
    
    // if bg_trial_mask_2 is active this frame...
    if (bg_trial_mask_2.status === PsychoJS.Status.STARTED) {
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
    main_maskComponents.forEach( function(thisComponent) {
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


function main_maskRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'main_mask' ---
    main_maskComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('main_mask.stopped', globalClock.getTime());
    // the Routine "main_mask" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var main_stimulus_presentationMaxDurationReached;
var main_stimulus_presentationMaxDuration;
var main_stimulus_presentationComponents;
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
    stimulus_presentation_main.setImage(feature_file);
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


var main_yesno_responseMaxDurationReached;
var _main_yesno_key_response_allKeys;
var main_yesno_responseMaxDuration;
var main_yesno_responseComponents;
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
    // Run 'Begin Routine' code from main_yesno_bg_setting
    if (previousText[concept]) {
        bgImage = "assets/images/17_Main_Test.jpg";   // NOT empty
    } else {
        bgImage = "assets/images/16_Main_Test.jpg";   // empty
    }
    
    if (previousText[concept]) {
        soundYN = "assets/sounds/Main_10_c.wav";   // NOT empty
    } else {
        soundYN = "assets/sounds/Main_10_a.wav";   // empty
    }
    bg_main_yesno.setImage(bgImage);
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
    sound_main_yesno.isFinished = false;
    sound_main_yesno.setValue(soundYN);
    sound_main_yesno.setVolume(1.0);
    psychoJS.experiment.addData('main_yesno_response.started', globalClock.getTime());
    main_yesno_responseMaxDuration = null
    // keep track of which components have finished
    main_yesno_responseComponents = [];
    main_yesno_responseComponents.push(bg_main_yesno);
    main_yesno_responseComponents.push(btn_yesno_yes_main);
    main_yesno_responseComponents.push(btn_yesno_no_main);
    main_yesno_responseComponents.push(main_yesno_key_response);
    main_yesno_responseComponents.push(main_yesno_mouse);
    main_yesno_responseComponents.push(sound_main_yesno);
    
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
    if (sound_main_yesno.status === STARTED) {
        sound_main_yesno.isPlaying = true;
        if (t >= (sound_main_yesno.getDuration() + sound_main_yesno.tStart)) {
            sound_main_yesno.isFinished = true;
        }
    }
    // start/stop sound_main_yesno
    if (t >= 0.0 && sound_main_yesno.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_main_yesno.tStart = t;  // (not accounting for frame time here)
      sound_main_yesno.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_main_yesno.play(); });  // screen flip
      sound_main_yesno.status = PsychoJS.Status.STARTED;
    }
    if (sound_main_yesno.status === PsychoJS.Status.STARTED && Boolean(false) || sound_main_yesno.isFinished) {
      // keep track of stop time/frame for later
      sound_main_yesno.tStop = t;  // not accounting for scr refresh
      sound_main_yesno.frameNStop = frameN;  // exact frame index
      // update status
      sound_main_yesno.status = PsychoJS.Status.FINISHED;
      // stop playback
      sound_main_yesno.stop();
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
            if (main_yesno_mouse.clicked_name.includes('btn_yesno_yes_main')) {
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
    sound_main_yesno.stop();  // ensure sound has stopped at end of Routine
    // the Routine "main_yesno_response" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var main_written_responseMaxDurationReached;
var main_written_responseMaxDuration;
var main_written_responseComponents;
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
    sound_main_written.isFinished = false;
    sound_main_written.setValue('assets/sounds/Main_10_d.wav');
    sound_main_written.setVolume(1.0);
    psychoJS.experiment.addData('main_written_response.started', globalClock.getTime());
    main_written_responseMaxDuration = null
    // keep track of which components have finished
    main_written_responseComponents = [];
    main_written_responseComponents.push(bg_main_written);
    main_written_responseComponents.push(textbox_response_main);
    main_written_responseComponents.push(main_written_mouse);
    main_written_responseComponents.push(btn_written_main);
    main_written_responseComponents.push(sound_main_written);
    
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
    
    if (sound_main_written.status === STARTED) {
        sound_main_written.isPlaying = true;
        if (t >= (sound_main_written.getDuration() + sound_main_written.tStart)) {
            sound_main_written.isFinished = true;
        }
    }
    // start/stop sound_main_written
    if (t >= 0.0 && sound_main_written.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_main_written.tStart = t;  // (not accounting for frame time here)
      sound_main_written.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_main_written.play(); });  // screen flip
      sound_main_written.status = PsychoJS.Status.STARTED;
    }
    if (sound_main_written.status === PsychoJS.Status.STARTED && Boolean(false) || sound_main_written.isFinished) {
      // keep track of stop time/frame for later
      sound_main_written.tStop = t;  // not accounting for scr refresh
      sound_main_written.frameNStop = frameN;  // exact frame index
      // update status
      sound_main_written.status = PsychoJS.Status.FINISHED;
      // stop playback
      sound_main_written.stop();
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
    
    sound_main_written.stop();  // ensure sound has stopped at end of Routine
    // the Routine "main_written_response" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var main_feedbackMaxDurationReached;
var main_feedbackMaxDuration;
var main_feedbackComponents;
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


var endMaxDurationReached;
var endMaxDuration;
var endComponents;
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
    sound_1.isFinished = false;
    sound_1.setValue('assets/sounds/Main_11.wav');
    sound_1.setVolume(1.0);
    psychoJS.experiment.addData('end.started', globalClock.getTime());
    endMaxDuration = 10
    // keep track of which components have finished
    endComponents = [];
    endComponents.push(bg_goodbye_img);
    endComponents.push(sound_1);
    
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
    
    if (sound_1.status === STARTED) {
        sound_1.isPlaying = true;
        if (t >= (sound_1.getDuration() + sound_1.tStart)) {
            sound_1.isFinished = true;
        }
    }
    // start/stop sound_1
    if (t >= 0.0 && sound_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_1.tStart = t;  // (not accounting for frame time here)
      sound_1.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_1.play(); });  // screen flip
      sound_1.status = PsychoJS.Status.STARTED;
    }
    if (sound_1.status === PsychoJS.Status.STARTED && Boolean(false) || sound_1.isFinished) {
      // keep track of stop time/frame for later
      sound_1.tStop = t;  // not accounting for scr refresh
      sound_1.frameNStop = frameN;  // exact frame index
      // update status
      sound_1.status = PsychoJS.Status.FINISHED;
      // stop playback
      sound_1.stop();
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
    sound_1.stop();  // ensure sound has stopped at end of Routine
    // the Routine "end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var binoc_findMaxDurationReached;
var binoc_findMaxDuration;
var binoc_findComponents;
function binoc_findRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'binoc_find' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    binoc_findClock.reset();
    routineTimer.reset();
    binoc_findMaxDurationReached = false;
    // update component parameters for each repeat
    // setup some python lists for storing info about the click_binocfind_mouse
    // current position of the mouse:
    click_binocfind_mouse.x = [];
    click_binocfind_mouse.y = [];
    click_binocfind_mouse.leftButton = [];
    click_binocfind_mouse.midButton = [];
    click_binocfind_mouse.rightButton = [];
    click_binocfind_mouse.time = [];
    click_binocfind_mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    sound_binoc_find.isFinished = false;
    sound_binoc_find.setValue('assets/sounds/Main_12.wav');
    sound_binoc_find.setVolume(1.0);
    psychoJS.experiment.addData('binoc_find.started', globalClock.getTime());
    // skip this Routine if its 'Skip if' condition is True
    continueRoutine = continueRoutine && !((expInfo['taskOrder'] == 2));
    maxDurationReached = false
    binoc_findMaxDuration = null
    // keep track of which components have finished
    binoc_findComponents = [];
    binoc_findComponents.push(bg_binocfind_img);
    binoc_findComponents.push(btn_binocfind_img);
    binoc_findComponents.push(click_binocfind_mouse);
    binoc_findComponents.push(sound_binoc_find);
    
    binoc_findComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function binoc_findRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'binoc_find' ---
    // get current time
    t = binoc_findClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *bg_binocfind_img* updates
    if (t >= 0.0 && bg_binocfind_img.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bg_binocfind_img.tStart = t;  // (not accounting for frame time here)
      bg_binocfind_img.frameNStart = frameN;  // exact frame index
      
      bg_binocfind_img.setAutoDraw(true);
    }
    
    
    // if bg_binocfind_img is active this frame...
    if (bg_binocfind_img.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *btn_binocfind_img* updates
    if (t >= 0.0 && btn_binocfind_img.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      btn_binocfind_img.tStart = t;  // (not accounting for frame time here)
      btn_binocfind_img.frameNStart = frameN;  // exact frame index
      
      btn_binocfind_img.setAutoDraw(true);
    }
    
    
    // if btn_binocfind_img is active this frame...
    if (btn_binocfind_img.status === PsychoJS.Status.STARTED) {
    }
    
    // *click_binocfind_mouse* updates
    if (t >= 0.0 && click_binocfind_mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      click_binocfind_mouse.tStart = t;  // (not accounting for frame time here)
      click_binocfind_mouse.frameNStart = frameN;  // exact frame index
      
      click_binocfind_mouse.status = PsychoJS.Status.STARTED;
      click_binocfind_mouse.mouseClock.reset();
      prevButtonState = click_binocfind_mouse.getPressed();  // if button is down already this ISN'T a new click
    }
    
    // if click_binocfind_mouse is active this frame...
    if (click_binocfind_mouse.status === PsychoJS.Status.STARTED) {
      _mouseButtons = click_binocfind_mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          click_binocfind_mouse.clickableObjects = eval(btn_binocfind_img)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(click_binocfind_mouse.clickableObjects)) {
              click_binocfind_mouse.clickableObjects = [click_binocfind_mouse.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of click_binocfind_mouse.clickableObjects) {
              if (obj.contains(click_binocfind_mouse)) {
                  gotValidClick = true;
                  click_binocfind_mouse.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              click_binocfind_mouse.clicked_name.push(null);
          }
          _mouseXYs = click_binocfind_mouse.getPos();
          click_binocfind_mouse.x.push(_mouseXYs[0]);
          click_binocfind_mouse.y.push(_mouseXYs[1]);
          click_binocfind_mouse.leftButton.push(_mouseButtons[0]);
          click_binocfind_mouse.midButton.push(_mouseButtons[1]);
          click_binocfind_mouse.rightButton.push(_mouseButtons[2]);
          click_binocfind_mouse.time.push(click_binocfind_mouse.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    if (sound_binoc_find.status === STARTED) {
        sound_binoc_find.isPlaying = true;
        if (t >= (sound_binoc_find.getDuration() + sound_binoc_find.tStart)) {
            sound_binoc_find.isFinished = true;
        }
    }
    // start/stop sound_binoc_find
    if (t >= 0.0 && sound_binoc_find.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_binoc_find.tStart = t;  // (not accounting for frame time here)
      sound_binoc_find.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_binoc_find.play(); });  // screen flip
      sound_binoc_find.status = PsychoJS.Status.STARTED;
    }
    if (sound_binoc_find.status === PsychoJS.Status.STARTED && Boolean(false) || sound_binoc_find.isFinished) {
      // keep track of stop time/frame for later
      sound_binoc_find.tStop = t;  // not accounting for scr refresh
      sound_binoc_find.frameNStop = frameN;  // exact frame index
      // update status
      sound_binoc_find.status = PsychoJS.Status.FINISHED;
      // stop playback
      sound_binoc_find.stop();
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
    binoc_findComponents.forEach( function(thisComponent) {
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


function binoc_findRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'binoc_find' ---
    binoc_findComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('binoc_find.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('click_binocfind_mouse.x', click_binocfind_mouse.x);
    psychoJS.experiment.addData('click_binocfind_mouse.y', click_binocfind_mouse.y);
    psychoJS.experiment.addData('click_binocfind_mouse.leftButton', click_binocfind_mouse.leftButton);
    psychoJS.experiment.addData('click_binocfind_mouse.midButton', click_binocfind_mouse.midButton);
    psychoJS.experiment.addData('click_binocfind_mouse.rightButton', click_binocfind_mouse.rightButton);
    psychoJS.experiment.addData('click_binocfind_mouse.time', click_binocfind_mouse.time);
    psychoJS.experiment.addData('click_binocfind_mouse.clicked_name', click_binocfind_mouse.clicked_name);
    
    sound_binoc_find.stop();  // ensure sound has stopped at end of Routine
    // the Routine "binoc_find" was not non-slip safe, so reset the non-slip timer
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
