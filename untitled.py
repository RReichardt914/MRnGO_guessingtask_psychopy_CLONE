#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2025.2.4),
    on március 09, 2026, at 20:32
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

# --- Import packages ---
from psychopy import locale_setup
from psychopy import prefs
from psychopy import plugins
plugins.activatePlugins()
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors, layout, hardware
from psychopy.tools import environmenttools
from psychopy.constants import (
    NOT_STARTED, STARTED, PLAYING, PAUSED, STOPPED, STOPPING, FINISHED, PRESSED, 
    RELEASED, FOREVER, priority
)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard

# Run 'Before Experiment' code from written_button_placement_main
showFeedback = False
# --- Setup global variables (available in all functions) ---
# create a device manager to handle hardware (keyboards, mice, mirophones, speakers, etc.)
deviceManager = hardware.DeviceManager()
# ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
# store info about the experiment session
psychopyVersion = '2025.2.4'
expName = 'untitled'  # from the Builder filename that created this script
expVersion = ''
# a list of functions to run when the experiment ends (starts off blank)
runAtExit = []
# information about this experiment
expInfo = {
    'participant': f"{randint(0, 999999):06.0f}",
    'session': '001',
    'stimPresTime': '5',
    'date|hid': data.getDateStr(),
    'expName|hid': expName,
    'expVersion|hid': expVersion,
    'psychopyVersion|hid': psychopyVersion,
}

# --- Define some variables which will change depending on pilot mode ---
'''
To run in pilot mode, either use the run/pilot toggle in Builder, Coder and Runner, 
or run the experiment with `--pilot` as an argument. To change what pilot 
#mode does, check out the 'Pilot mode' tab in preferences.
'''
# work out from system args whether we are running in pilot mode
PILOTING = core.setPilotModeFromArgs()
# start off with values from experiment settings
_fullScr = True
_winSize = (1024, 768)
# if in pilot mode, apply overrides according to preferences
if PILOTING:
    # force windowed mode
    if prefs.piloting['forceWindowed']:
        _fullScr = False
        # set window size
        _winSize = prefs.piloting['forcedWindowSize']
    # replace default participant ID
    if prefs.piloting['replaceParticipantID']:
        expInfo['participant'] = 'pilot'

def showExpInfoDlg(expInfo):
    """
    Show participant info dialog.
    Parameters
    ==========
    expInfo : dict
        Information about this experiment.
    
    Returns
    ==========
    dict
        Information about this experiment.
    """
    # show participant info dialog
    dlg = gui.DlgFromDict(
        dictionary=expInfo, sortKeys=False, title=expName, alwaysOnTop=True
    )
    if dlg.OK == False:
        core.quit()  # user pressed cancel
    # return expInfo
    return expInfo


def setupData(expInfo, dataDir=None):
    """
    Make an ExperimentHandler to handle trials and saving.
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    dataDir : Path, str or None
        Folder to save the data to, leave as None to create a folder in the current directory.    
    Returns
    ==========
    psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    """
    # remove dialog-specific syntax from expInfo
    for key, val in expInfo.copy().items():
        newKey, _ = data.utils.parsePipeSyntax(key)
        expInfo[newKey] = expInfo.pop(key)
    
    # data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
    if dataDir is None:
        dataDir = _thisDir
    filename = u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])
    # make sure filename is relative to dataDir
    if os.path.isabs(filename):
        dataDir = os.path.commonprefix([dataDir, filename])
        filename = os.path.relpath(filename, dataDir)
    
    # an ExperimentHandler isn't essential but helps with data saving
    thisExp = data.ExperimentHandler(
        name=expName, version=expVersion,
        extraInfo=expInfo, runtimeInfo=None,
        originPath='C:\\Users\\user\\Documents\\MRnGO_psychopy_experiment\\untitled.py',
        savePickle=True, saveWideText=True,
        dataFileName=dataDir + os.sep + filename, sortColumns='time'
    )
    thisExp.setPriority('thisRow.t', priority.CRITICAL)
    thisExp.setPriority('expName', priority.LOW)
    # return experiment handler
    return thisExp


def setupLogging(filename):
    """
    Setup a log file and tell it what level to log at.
    
    Parameters
    ==========
    filename : str or pathlib.Path
        Filename to save log file and data files as, doesn't need an extension.
    
    Returns
    ==========
    psychopy.logging.LogFile
        Text stream to receive inputs from the logging system.
    """
    # set how much information should be printed to the console / app
    if PILOTING:
        logging.console.setLevel(
            prefs.piloting['pilotConsoleLoggingLevel']
        )
    else:
        logging.console.setLevel('warning')
    # save a log file for detail verbose info
    logFile = logging.LogFile(filename+'.log')
    if PILOTING:
        logFile.setLevel(
            prefs.piloting['pilotLoggingLevel']
        )
    else:
        logFile.setLevel(
            logging.getLevel('info')
        )
    
    return logFile


def setupWindow(expInfo=None, win=None):
    """
    Setup the Window
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    win : psychopy.visual.Window
        Window to setup - leave as None to create a new window.
    
    Returns
    ==========
    psychopy.visual.Window
        Window in which to run this experiment.
    """
    if PILOTING:
        logging.debug('Fullscreen settings ignored as running in pilot mode.')
    
    if win is None:
        # if not given a window to setup, make one
        win = visual.Window(
            size=_winSize, fullscr=_fullScr, screen=0,
            winType='pyglet', allowGUI=False, allowStencil=True,
            monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
            backgroundImage='', backgroundFit='none',
            blendMode='avg', useFBO=True,
            units='height',
            checkTiming=False  # we're going to do this ourselves in a moment
        )
    else:
        # if we have a window, just set the attributes which are safe to set
        win.color = [0,0,0]
        win.colorSpace = 'rgb'
        win.backgroundImage = ''
        win.backgroundFit = 'none'
        win.units = 'height'
    if expInfo is not None:
        # get/measure frame rate if not already in expInfo
        if win._monitorFrameRate is None:
            win._monitorFrameRate = win.getActualFrameRate(infoMsg='Attempting to measure frame rate of screen, please wait...')
        expInfo['frameRate'] = win._monitorFrameRate
    win.hideMessage()
    if PILOTING:
        # show a visual indicator if we're in piloting mode
        if prefs.piloting['showPilotingIndicator']:
            win.showPilotingIndicator()
        # always show the mouse in piloting mode
        if prefs.piloting['forceMouseVisible']:
            win.mouseVisible = True
    
    return win


def setupDevices(expInfo, thisExp, win):
    """
    Setup whatever devices are available (mouse, keyboard, speaker, eyetracker, etc.) and add them to 
    the device manager (deviceManager)
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window in which to run this experiment.
    Returns
    ==========
    bool
        True if completed successfully.
    """
    # --- Setup input devices ---
    ioConfig = {}
    ioSession = ioServer = eyetracker = None
    
    # store ioServer object in the device manager
    deviceManager.ioServer = ioServer
    
    # create a default keyboard (e.g. to check for escape)
    if deviceManager.getDevice('defaultKeyboard') is None:
        deviceManager.addDevice(
            deviceClass='keyboard', deviceName='defaultKeyboard', backend='ptb'
        )
    # return True if completed successfully
    return True

def pauseExperiment(thisExp, win=None, timers=[], currentRoutine=None):
    """
    Pause this experiment, preventing the flow from advancing to the next routine until resumed.
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window for this experiment.
    timers : list, tuple
        List of timers to reset once pausing is finished.
    currentRoutine : psychopy.data.Routine
        Current Routine we are in at time of pausing, if any. This object tells PsychoPy what Components to pause/play/dispatch.
    """
    # if we are not paused, do nothing
    if thisExp.status != PAUSED:
        return
    
    # start a timer to figure out how long we're paused for
    pauseTimer = core.Clock()
    # pause any playback components
    if currentRoutine is not None:
        for comp in currentRoutine.getPlaybackComponents():
            comp.pause()
    # make sure we have a keyboard
    defaultKeyboard = deviceManager.getDevice('defaultKeyboard')
    if defaultKeyboard is None:
        defaultKeyboard = deviceManager.addKeyboard(
            deviceClass='keyboard',
            deviceName='defaultKeyboard',
            backend='PsychToolbox',
        )
    # run a while loop while we wait to unpause
    while thisExp.status == PAUSED:
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=['escape']):
            endExperiment(thisExp, win=win)
        # dispatch messages on response components
        if currentRoutine is not None:
            for comp in currentRoutine.getDispatchComponents():
                comp.device.dispatchMessages()
        # sleep 1ms so other threads can execute
        clock.time.sleep(0.001)
    # if stop was requested while paused, quit
    if thisExp.status == FINISHED:
        endExperiment(thisExp, win=win)
    # resume any playback components
    if currentRoutine is not None:
        for comp in currentRoutine.getPlaybackComponents():
            comp.play()
    # reset any timers
    for timer in timers:
        timer.addTime(-pauseTimer.getTime())


def run(expInfo, thisExp, win, globalClock=None, thisSession=None):
    """
    Run the experiment flow.
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    psychopy.visual.Window
        Window in which to run this experiment.
    globalClock : psychopy.core.clock.Clock or None
        Clock to get global time from - supply None to make a new one.
    thisSession : psychopy.session.Session or None
        Handle of the Session object this experiment is being run from, if any.
    """
    # mark experiment as started
    thisExp.status = STARTED
    # update experiment info
    expInfo['date'] = data.getDateStr()
    expInfo['expName'] = expName
    expInfo['expVersion'] = expVersion
    expInfo['psychopyVersion'] = psychopyVersion
    # make sure window is set to foreground to prevent losing focus
    win.winHandle.activate()
    # make sure variables created by exec are available globally
    exec = environmenttools.setExecEnvironment(globals())
    # get device handles from dict of input devices
    ioServer = deviceManager.ioServer
    # get/create a default keyboard (e.g. to check for escape)
    defaultKeyboard = deviceManager.getDevice('defaultKeyboard')
    if defaultKeyboard is None:
        deviceManager.addDevice(
            deviceClass='keyboard', deviceName='defaultKeyboard', backend='PsychToolbox'
        )
    eyetracker = deviceManager.getDevice('eyetracker')
    # make sure we're running in the directory for this experiment
    os.chdir(_thisDir)
    # get filename from ExperimentHandler for convenience
    filename = thisExp.dataFileName
    frameTolerance = 0.001  # how close to onset before 'same' frame
    endExpNow = False  # flag for 'escape' or other condition => quit the exp
    # get frame duration from frame rate in expInfo
    if 'frameRate' in expInfo and expInfo['frameRate'] is not None:
        frameDur = 1.0 / round(expInfo['frameRate'])
    else:
        frameDur = 1.0 / 60.0  # could not measure, so guess
    
    # Start Code - component code to be run after the window creation
    
    # --- Initialize components for Routine "start_screen" ---
    bg_start_img = visual.ImageStim(
        win=win,
        name='bg_start_img', units='norm', 
        image='assets/bg_start.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), draggable=False, size=(2, 2),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=0.0)
    btn_start_img = visual.ImageStim(
        win=win,
        name='btn_start_img', units='pix', 
        image='assets/button_start.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), draggable=False, size=(268.5, 87),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    click_start_mouse = event.Mouse(win=win)
    x, y = [None, None]
    click_start_mouse.mouseClock = core.Clock()
    
    # --- Initialize components for Routine "welcome_screen" ---
    bg_welcome_img = visual.ImageStim(
        win=win,
        name='bg_welcome_img', units='norm', 
        image='assets/bg_welcome.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), draggable=False, size=(2, 2),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=0.0)
    btn_welcome_img = visual.ImageStim(
        win=win,
        name='btn_welcome_img', units='pix', 
        image='assets/button_jatsszunk.png', mask=None, anchor='center',
        ori=0.0, pos=None, draggable=False, size=(272, 74.5),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    click_welcome_mouse = event.Mouse(win=win)
    x, y = [None, None]
    click_welcome_mouse.mouseClock = core.Clock()
    # Run 'Begin Experiment' code from welcome_screen_button_placement
    
    w, h = win.size  # window width and height in pixels
    btn_welcome_img.pos = (w/3, -h/3)  # bottom-right third center
    
    
    # --- Initialize components for Routine "rules_start_screen" ---
    bg_rulesstart_img = visual.ImageStim(
        win=win,
        name='bg_rulesstart_img', units='norm', 
        image='assets/bg_rules-start.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), draggable=False, size=(2, 2),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=0.0)
    btn_rulesstart_img = visual.ImageStim(
        win=win,
        name='btn_rulesstart_img', units='pix', 
        image='assets/button_jatsszunk.png', mask=None, anchor='center',
        ori=0.0, pos=None, draggable=False, size=(272, 74.5),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    click_rulesstart_mouse = event.Mouse(win=win)
    x, y = [None, None]
    click_rulesstart_mouse.mouseClock = core.Clock()
    # Run 'Begin Experiment' code from rulesstart_screen_button_placement
    btn_rulesstart_img.pos = (-w/3, -h/3)  # bottom-right third center
    
    
    # --- Initialize components for Routine "rules_01_screen" ---
    bg_rules01_img = visual.ImageStim(
        win=win,
        name='bg_rules01_img', units='norm', 
        image='assets/bg_rules-01.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), draggable=False, size=(2, 2),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=0.0)
    btn_rules01_img = visual.ImageStim(
        win=win,
        name='btn_rules01_img', units='pix', 
        image='assets/button_jatsszunk.png', mask=None, anchor='center',
        ori=0.0, pos=None, draggable=False, size=(272, 74.5),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    click_rules01_mouse = event.Mouse(win=win)
    x, y = [None, None]
    click_rules01_mouse.mouseClock = core.Clock()
    # Run 'Begin Experiment' code from rules01_screen_button_placement
    btn_rules01_img.pos = (-w/3, -h/3)  # bottom-right third center
    
    
    # --- Initialize components for Routine "rules_02_screen" ---
    bg_rules02_img = visual.ImageStim(
        win=win,
        name='bg_rules02_img', units='norm', 
        image='assets/bg_rules-02.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), draggable=False, size=(2, 2),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=0.0)
    btn_rules02_img = visual.ImageStim(
        win=win,
        name='btn_rules02_img', units='pix', 
        image='assets/button_jatsszunk.png', mask=None, anchor='center',
        ori=0.0, pos=None, draggable=False, size=(272, 74.5),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    click_rules02_mouse = event.Mouse(win=win)
    x, y = [None, None]
    click_rules02_mouse.mouseClock = core.Clock()
    # Run 'Begin Experiment' code from rules02_screen_button_placement
    btn_rules02_img.pos = (w/3, h/3)  # bottom-right third center
    
    
    # --- Initialize components for Routine "trial_start_screen" ---
    bg_trialstart_img = visual.ImageStim(
        win=win,
        name='bg_trialstart_img', units='norm', 
        image='assets/bg_trial-start.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), draggable=False, size=(2, 2),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=0.0)
    btn_trialstart_img = visual.ImageStim(
        win=win,
        name='btn_trialstart_img', units='pix', 
        image='assets/button_start.png', mask=None, anchor='center',
        ori=0.0, pos=None, draggable=False, size=(268.5, 87),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    click_trialstart_mouse = event.Mouse(win=win)
    x, y = [None, None]
    click_trialstart_mouse.mouseClock = core.Clock()
    # Run 'Begin Experiment' code from trialstart_screen_button_placement
    btn_trialstart_img.pos = (3*(w/8), 0)  # bottom-right third center
    
    
    # --- Initialize components for Routine "csv_selector" ---
    # Run 'Begin Experiment' code from pathway_construction_training
    import os
    
    concPathTrain = os.path.join('sequences', 'a05', 'a05_listE.csv')
    
    expInfo['concPathTrain'] = concPathTrain
    
    # --- Initialize components for Routine "train_stimulus_presentation" ---
    bg_trial_stimpres = visual.ImageStim(
        win=win,
        name='bg_trial_stimpres', units='norm', 
        image='assets/bg_stimpres.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), draggable=False, size=(2, 2),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=0.0)
    stimulus_presentation_train = visual.ImageStim(
        win=win,
        name='stimulus_presentation_train', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), draggable=False, size=(0.5, 0.5),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    stop_training = keyboard.Keyboard(deviceName='defaultKeyboard')
    
    # --- Initialize components for Routine "train_yesno_response" ---
    bg_trial_yesno = visual.ImageStim(
        win=win,
        name='bg_trial_yesno', units='norm', 
        image='assets/bg_yesno.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), draggable=False, size=(2, 2),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=0.0)
    btn_yesno_yes_img = visual.ImageStim(
        win=win,
        name='btn_yesno_yes_img', units='pix', 
        image='assets/button_igen.png', mask=None, anchor='center',
        ori=0.0, pos=None, draggable=False, size=(268.5, 87),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    btn_yesno_no_img = visual.ImageStim(
        win=win,
        name='btn_yesno_no_img', units='pix', 
        image='assets/button_nem.png', mask=None, anchor='center',
        ori=0.0, pos=None, draggable=False, size=(268.5, 87),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-2.0)
    trial_yesno_response = keyboard.Keyboard(deviceName='defaultKeyboard')
    click_yesno_mouse = event.Mouse(win=win)
    x, y = [None, None]
    click_yesno_mouse.mouseClock = core.Clock()
    # Run 'Begin Experiment' code from training_yesno_button_placement
    btn_yesno_yes_img.pos = (w/4, -h/3) 
    btn_yesno_no_img.pos = (-w/4, -h/3) 
    
    
    # --- Initialize components for Routine "train_written_response" ---
    bg_trial_written = visual.ImageStim(
        win=win,
        name='bg_trial_written', units='norm', 
        image='assets/bg_written.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), draggable=False, size=(2, 2),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=0.0)
    # Run 'Begin Experiment' code from code_whatconc
    previousText = {}    
    
    textbox_response_training = visual.TextBox2(
         win, text='', placeholder=None, font='Arial',
         ori=0.0, pos=(0, -0.12), draggable=False,      letterHeight=0.05,
         size=(1, 0.1), borderWidth=0.0,
         color=(-1.0000, -1.0000, 0.0902), colorSpace='rgb',
         opacity=None,
         bold=False, italic=False,
         lineSpacing=1.0, speechPoint=None,
         padding=0.0, alignment='center',
         anchor='center', overflow='visible',
         fillColor=None, borderColor=None,
         flipHoriz=False, flipVert=False, languageStyle='LTR',
         editable=True,
         name='textbox_response_training',
         depth=-2, autoLog=True,
    )
    click_written_mouse = event.Mouse(win=win)
    x, y = [None, None]
    click_written_mouse.mouseClock = core.Clock()
    btn_written_img = visual.ImageStim(
        win=win,
        name='btn_written_img', units='pix', 
        image='assets/button_jatsszunk.png', mask=None, anchor='center',
        ori=0.0, pos=None, draggable=False, size=(272, 74.5),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-4.0)
    # Run 'Begin Experiment' code from written_button_placement
    btn_written_img.pos = (0, -h/3)  # bottom-right third center
    
    
    # --- Initialize components for Routine "train_feedback" ---
    bg_feedback_train = visual.ImageStim(
        win=win,
        name='bg_feedback_train', units='norm', 
        image='assets/bg_feedback.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), draggable=False, size=(2, 2),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=0.0)
    btn_feedback_img = visual.ImageStim(
        win=win,
        name='btn_feedback_img', units='pix', 
        image='assets/button_jatsszunk.png', mask=None, anchor='center',
        ori=0.0, pos=None, draggable=False, size=(272, 74.5),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    click_feedback_mouse = event.Mouse(win=win)
    x, y = [None, None]
    click_feedback_mouse.mouseClock = core.Clock()
    # Run 'Begin Experiment' code from feedback_screen_button_placement
    btn_feedback_img.pos = (0, -h/3)  # bottom-right third center
    
    feedback_concept = visual.TextStim(win=win, name='feedback_concept',
        text='',
        font='Arial',
        units='norm', pos=(-0.3, 0.3), draggable=False, height=0.1, wrapWidth=None, ori=0.0, 
        color=(-1.0000, -1.0000, 0.0902), colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-4.0);
    
    # --- Initialize components for Routine "main_start_screen" ---
    bg_mainstart_img = visual.ImageStim(
        win=win,
        name='bg_mainstart_img', units='norm', 
        image='assets/bg_main-start.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), draggable=False, size=(2, 2),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=0.0)
    btn_mainstart_img = visual.ImageStim(
        win=win,
        name='btn_mainstart_img', units='pix', 
        image='assets/button_start.png', mask=None, anchor='center',
        ori=0.0, pos=None, draggable=False, size=(268.5, 87),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    click_mainstart_mouse = event.Mouse(win=win)
    x, y = [None, None]
    click_mainstart_mouse.mouseClock = core.Clock()
    # Run 'Begin Experiment' code from mainstart_screen_button_placement
    btn_mainstart_img.pos = (-3*(w/8), 0)  # bottom-right third center
    
    
    # --- Initialize components for Routine "main_stimulus_presentation" ---
    bg_main_stimpres = visual.ImageStim(
        win=win,
        name='bg_main_stimpres', units='norm', 
        image='assets/bg_stimpres.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), draggable=False, size=(2, 2),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=0.0)
    stimulus_presentation_main = visual.ImageStim(
        win=win,
        name='stimulus_presentation_main', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), draggable=False, size=(0.5, 0.5),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    
    # --- Initialize components for Routine "main_yesno_response" ---
    bg_main_yesno = visual.ImageStim(
        win=win,
        name='bg_main_yesno', units='norm', 
        image='assets/bg_yesno.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), draggable=False, size=(2, 2),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=0.0)
    btn_yesno_yes_main = visual.ImageStim(
        win=win,
        name='btn_yesno_yes_main', units='pix', 
        image='assets/button_igen.png', mask=None, anchor='center',
        ori=0.0, pos=None, draggable=False, size=(268.5, 87),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    btn_yesno_no_main = visual.ImageStim(
        win=win,
        name='btn_yesno_no_main', units='pix', 
        image='assets/button_nem.png', mask=None, anchor='center',
        ori=0.0, pos=None, draggable=False, size=(268.5, 87),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-2.0)
    main_yesno_key_response = keyboard.Keyboard(deviceName='defaultKeyboard')
    main_yesno_mouse = event.Mouse(win=win)
    x, y = [None, None]
    main_yesno_mouse.mouseClock = core.Clock()
    # Run 'Begin Experiment' code from main_yesno_button_placement
    btn_yesno_yes_main.pos = (w/4, -h/3) 
    btn_yesno_no_main.pos = (-w/4, -h/3) 
    
    
    # --- Initialize components for Routine "main_written_response" ---
    bg_main_written = visual.ImageStim(
        win=win,
        name='bg_main_written', units='norm', 
        image='assets/bg_written.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), draggable=False, size=(2, 2),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=0.0)
    textbox_response_main = visual.TextBox2(
         win, text='', placeholder=None, font='Arial',
         ori=0.0, pos=(0, -0.12), draggable=False,      letterHeight=0.05,
         size=(1, 0.1), borderWidth=0.0,
         color=(-1.0000, -1.0000, 0.0902), colorSpace='rgb',
         opacity=None,
         bold=False, italic=False,
         lineSpacing=1.0, speechPoint=None,
         padding=0.0, alignment='center',
         anchor='center', overflow='visible',
         fillColor=None, borderColor=None,
         flipHoriz=False, flipVert=False, languageStyle='LTR',
         editable=True,
         name='textbox_response_main',
         depth=-2, autoLog=True,
    )
    main_written_mouse = event.Mouse(win=win)
    x, y = [None, None]
    main_written_mouse.mouseClock = core.Clock()
    btn_written_main = visual.ImageStim(
        win=win,
        name='btn_written_main', units='pix', 
        image='assets/button_jatsszunk.png', mask=None, anchor='center',
        ori=0.0, pos=None, draggable=False, size=(272, 74.5),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-4.0)
    # Run 'Begin Experiment' code from written_button_placement_main
    btn_written_main.pos = (0, -h/3)  # bottom-right third center
    
    
    # --- Initialize components for Routine "main_feedback" ---
    bg_feedback_main = visual.ImageStim(
        win=win,
        name='bg_feedback_main', units='norm', 
        image='assets/bg_feedback.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), draggable=False, size=(2, 2),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=0.0)
    btn_feedback_main = visual.ImageStim(
        win=win,
        name='btn_feedback_main', units='pix', 
        image='assets/button_jatsszunk.png', mask=None, anchor='center',
        ori=0.0, pos=None, draggable=False, size=(272, 74.5),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    main_feedback_mouse = event.Mouse(win=win)
    x, y = [None, None]
    main_feedback_mouse.mouseClock = core.Clock()
    # Run 'Begin Experiment' code from feedback_screen_button_placement_main
    btn_feedback_main.pos = (0, -h/3)  # bottom-right third center
    
    feedback_concept_main = visual.TextStim(win=win, name='feedback_concept_main',
        text='',
        font='Arial',
        units='norm', pos=(-0.3, 0.3), draggable=False, height=0.1, wrapWidth=None, ori=0.0, 
        color=(-1.0000, -1.0000, 0.0902), colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-4.0);
    
    # --- Initialize components for Routine "end" ---
    bg_goodbye_img = visual.ImageStim(
        win=win,
        name='bg_goodbye_img', units='norm', 
        image='assets/bg_goodbye.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), draggable=False, size=(2, 2),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=0.0)
    
    # create some handy timers
    
    # global clock to track the time since experiment started
    if globalClock is None:
        # create a clock if not given one
        globalClock = core.Clock()
    if isinstance(globalClock, str):
        # if given a string, make a clock accoridng to it
        if globalClock == 'float':
            # get timestamps as a simple value
            globalClock = core.Clock(format='float')
        elif globalClock == 'iso':
            # get timestamps in ISO format
            globalClock = core.Clock(format='%Y-%m-%d_%H:%M:%S.%f%z')
        else:
            # get timestamps in a custom format
            globalClock = core.Clock(format=globalClock)
    if ioServer is not None:
        ioServer.syncClock(globalClock)
    logging.setDefaultClock(globalClock)
    if eyetracker is not None:
        eyetracker.enableEventReporting()
    # routine timer to track time remaining of each (possibly non-slip) routine
    routineTimer = core.Clock()
    win.flip()  # flip window to reset last flip timer
    # store the exact time the global clock started
    expInfo['expStart'] = data.getDateStr(
        format='%Y-%m-%d %Hh%M.%S.%f %z', fractionalSecondDigits=6
    )
    
    # --- Prepare to start Routine "start_screen" ---
    # create an object to store info about Routine start_screen
    start_screen = data.Routine(
        name='start_screen',
        components=[bg_start_img, btn_start_img, click_start_mouse],
    )
    start_screen.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # setup some python lists for storing info about the click_start_mouse
    click_start_mouse.x = []
    click_start_mouse.y = []
    click_start_mouse.leftButton = []
    click_start_mouse.midButton = []
    click_start_mouse.rightButton = []
    click_start_mouse.time = []
    click_start_mouse.clicked_name = []
    gotValidClick = False  # until a click is received
    # store start times for start_screen
    start_screen.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    start_screen.tStart = globalClock.getTime(format='float')
    start_screen.status = STARTED
    thisExp.addData('start_screen.started', start_screen.tStart)
    start_screen.maxDuration = None
    # keep track of which components have finished
    start_screenComponents = start_screen.components
    for thisComponent in start_screen.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "start_screen" ---
    thisExp.currentRoutine = start_screen
    start_screen.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *bg_start_img* updates
        
        # if bg_start_img is starting this frame...
        if bg_start_img.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            bg_start_img.frameNStart = frameN  # exact frame index
            bg_start_img.tStart = t  # local t and not account for scr refresh
            bg_start_img.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(bg_start_img, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'bg_start_img.started')
            # update status
            bg_start_img.status = STARTED
            bg_start_img.setAutoDraw(True)
        
        # if bg_start_img is active this frame...
        if bg_start_img.status == STARTED:
            # update params
            pass
        
        # *btn_start_img* updates
        
        # if btn_start_img is starting this frame...
        if btn_start_img.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            btn_start_img.frameNStart = frameN  # exact frame index
            btn_start_img.tStart = t  # local t and not account for scr refresh
            btn_start_img.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(btn_start_img, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'btn_start_img.started')
            # update status
            btn_start_img.status = STARTED
            btn_start_img.setAutoDraw(True)
        
        # if btn_start_img is active this frame...
        if btn_start_img.status == STARTED:
            # update params
            pass
        # *click_start_mouse* updates
        
        # if click_start_mouse is starting this frame...
        if click_start_mouse.status == NOT_STARTED and t >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            click_start_mouse.frameNStart = frameN  # exact frame index
            click_start_mouse.tStart = t  # local t and not account for scr refresh
            click_start_mouse.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(click_start_mouse, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.addData('click_start_mouse.started', t)
            # update status
            click_start_mouse.status = STARTED
            click_start_mouse.mouseClock.reset()
            prevButtonState = click_start_mouse.getPressed()  # if button is down already this ISN'T a new click
        if click_start_mouse.status == STARTED:  # only update if started and not finished!
            buttons = click_start_mouse.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    # check if the mouse was inside our 'clickable' objects
                    gotValidClick = False
                    clickableList = environmenttools.getFromNames(btn_start_img, namespace=locals())
                    for obj in clickableList:
                        # is this object clicked on?
                        if obj.contains(click_start_mouse):
                            gotValidClick = True
                            click_start_mouse.clicked_name.append(obj.name)
                    if not gotValidClick:
                        click_start_mouse.clicked_name.append(None)
                    x, y = click_start_mouse.getPos()
                    click_start_mouse.x.append(float(x))
                    click_start_mouse.y.append(float(y))
                    buttons = click_start_mouse.getPressed()
                    click_start_mouse.leftButton.append(buttons[0])
                    click_start_mouse.midButton.append(buttons[1])
                    click_start_mouse.rightButton.append(buttons[2])
                    click_start_mouse.time.append(click_start_mouse.mouseClock.getTime())
                    if gotValidClick:
                        continueRoutine = False  # end routine on response
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer, globalClock], 
                currentRoutine=start_screen,
            )
            # skip the frame we paused on
            continue
        
        # has a Component requested the Routine to end?
        if not continueRoutine:
            start_screen.forceEnded = routineForceEnded = True
        # has the Routine been forcibly ended?
        if start_screen.forceEnded or routineForceEnded:
            break
        # has every Component finished?
        continueRoutine = False
        for thisComponent in start_screen.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "start_screen" ---
    for thisComponent in start_screen.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for start_screen
    start_screen.tStop = globalClock.getTime(format='float')
    start_screen.tStopRefresh = tThisFlipGlobal
    thisExp.addData('start_screen.stopped', start_screen.tStop)
    # store data for thisExp (ExperimentHandler)
    thisExp.addData('click_start_mouse.x', click_start_mouse.x)
    thisExp.addData('click_start_mouse.y', click_start_mouse.y)
    thisExp.addData('click_start_mouse.leftButton', click_start_mouse.leftButton)
    thisExp.addData('click_start_mouse.midButton', click_start_mouse.midButton)
    thisExp.addData('click_start_mouse.rightButton', click_start_mouse.rightButton)
    thisExp.addData('click_start_mouse.time', click_start_mouse.time)
    thisExp.addData('click_start_mouse.clicked_name', click_start_mouse.clicked_name)
    thisExp.nextEntry()
    # the Routine "start_screen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "welcome_screen" ---
    # create an object to store info about Routine welcome_screen
    welcome_screen = data.Routine(
        name='welcome_screen',
        components=[bg_welcome_img, btn_welcome_img, click_welcome_mouse],
    )
    welcome_screen.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # setup some python lists for storing info about the click_welcome_mouse
    click_welcome_mouse.x = []
    click_welcome_mouse.y = []
    click_welcome_mouse.leftButton = []
    click_welcome_mouse.midButton = []
    click_welcome_mouse.rightButton = []
    click_welcome_mouse.time = []
    click_welcome_mouse.clicked_name = []
    gotValidClick = False  # until a click is received
    # store start times for welcome_screen
    welcome_screen.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    welcome_screen.tStart = globalClock.getTime(format='float')
    welcome_screen.status = STARTED
    thisExp.addData('welcome_screen.started', welcome_screen.tStart)
    welcome_screen.maxDuration = None
    # keep track of which components have finished
    welcome_screenComponents = welcome_screen.components
    for thisComponent in welcome_screen.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "welcome_screen" ---
    thisExp.currentRoutine = welcome_screen
    welcome_screen.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *bg_welcome_img* updates
        
        # if bg_welcome_img is starting this frame...
        if bg_welcome_img.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            bg_welcome_img.frameNStart = frameN  # exact frame index
            bg_welcome_img.tStart = t  # local t and not account for scr refresh
            bg_welcome_img.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(bg_welcome_img, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'bg_welcome_img.started')
            # update status
            bg_welcome_img.status = STARTED
            bg_welcome_img.setAutoDraw(True)
        
        # if bg_welcome_img is active this frame...
        if bg_welcome_img.status == STARTED:
            # update params
            pass
        
        # *btn_welcome_img* updates
        
        # if btn_welcome_img is starting this frame...
        if btn_welcome_img.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            btn_welcome_img.frameNStart = frameN  # exact frame index
            btn_welcome_img.tStart = t  # local t and not account for scr refresh
            btn_welcome_img.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(btn_welcome_img, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'btn_welcome_img.started')
            # update status
            btn_welcome_img.status = STARTED
            btn_welcome_img.setAutoDraw(True)
        
        # if btn_welcome_img is active this frame...
        if btn_welcome_img.status == STARTED:
            # update params
            pass
        # *click_welcome_mouse* updates
        
        # if click_welcome_mouse is starting this frame...
        if click_welcome_mouse.status == NOT_STARTED and t >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            click_welcome_mouse.frameNStart = frameN  # exact frame index
            click_welcome_mouse.tStart = t  # local t and not account for scr refresh
            click_welcome_mouse.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(click_welcome_mouse, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.addData('click_welcome_mouse.started', t)
            # update status
            click_welcome_mouse.status = STARTED
            click_welcome_mouse.mouseClock.reset()
            prevButtonState = click_welcome_mouse.getPressed()  # if button is down already this ISN'T a new click
        if click_welcome_mouse.status == STARTED:  # only update if started and not finished!
            buttons = click_welcome_mouse.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    # check if the mouse was inside our 'clickable' objects
                    gotValidClick = False
                    clickableList = environmenttools.getFromNames(btn_welcome_img, namespace=locals())
                    for obj in clickableList:
                        # is this object clicked on?
                        if obj.contains(click_welcome_mouse):
                            gotValidClick = True
                            click_welcome_mouse.clicked_name.append(obj.name)
                    if not gotValidClick:
                        click_welcome_mouse.clicked_name.append(None)
                    x, y = click_welcome_mouse.getPos()
                    click_welcome_mouse.x.append(float(x))
                    click_welcome_mouse.y.append(float(y))
                    buttons = click_welcome_mouse.getPressed()
                    click_welcome_mouse.leftButton.append(buttons[0])
                    click_welcome_mouse.midButton.append(buttons[1])
                    click_welcome_mouse.rightButton.append(buttons[2])
                    click_welcome_mouse.time.append(click_welcome_mouse.mouseClock.getTime())
                    if gotValidClick:
                        continueRoutine = False  # end routine on response
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer, globalClock], 
                currentRoutine=welcome_screen,
            )
            # skip the frame we paused on
            continue
        
        # has a Component requested the Routine to end?
        if not continueRoutine:
            welcome_screen.forceEnded = routineForceEnded = True
        # has the Routine been forcibly ended?
        if welcome_screen.forceEnded or routineForceEnded:
            break
        # has every Component finished?
        continueRoutine = False
        for thisComponent in welcome_screen.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "welcome_screen" ---
    for thisComponent in welcome_screen.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for welcome_screen
    welcome_screen.tStop = globalClock.getTime(format='float')
    welcome_screen.tStopRefresh = tThisFlipGlobal
    thisExp.addData('welcome_screen.stopped', welcome_screen.tStop)
    # store data for thisExp (ExperimentHandler)
    thisExp.addData('click_welcome_mouse.x', click_welcome_mouse.x)
    thisExp.addData('click_welcome_mouse.y', click_welcome_mouse.y)
    thisExp.addData('click_welcome_mouse.leftButton', click_welcome_mouse.leftButton)
    thisExp.addData('click_welcome_mouse.midButton', click_welcome_mouse.midButton)
    thisExp.addData('click_welcome_mouse.rightButton', click_welcome_mouse.rightButton)
    thisExp.addData('click_welcome_mouse.time', click_welcome_mouse.time)
    thisExp.addData('click_welcome_mouse.clicked_name', click_welcome_mouse.clicked_name)
    thisExp.nextEntry()
    # the Routine "welcome_screen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "rules_start_screen" ---
    # create an object to store info about Routine rules_start_screen
    rules_start_screen = data.Routine(
        name='rules_start_screen',
        components=[bg_rulesstart_img, btn_rulesstart_img, click_rulesstart_mouse],
    )
    rules_start_screen.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # setup some python lists for storing info about the click_rulesstart_mouse
    click_rulesstart_mouse.x = []
    click_rulesstart_mouse.y = []
    click_rulesstart_mouse.leftButton = []
    click_rulesstart_mouse.midButton = []
    click_rulesstart_mouse.rightButton = []
    click_rulesstart_mouse.time = []
    click_rulesstart_mouse.clicked_name = []
    gotValidClick = False  # until a click is received
    # store start times for rules_start_screen
    rules_start_screen.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    rules_start_screen.tStart = globalClock.getTime(format='float')
    rules_start_screen.status = STARTED
    thisExp.addData('rules_start_screen.started', rules_start_screen.tStart)
    rules_start_screen.maxDuration = None
    # keep track of which components have finished
    rules_start_screenComponents = rules_start_screen.components
    for thisComponent in rules_start_screen.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "rules_start_screen" ---
    thisExp.currentRoutine = rules_start_screen
    rules_start_screen.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *bg_rulesstart_img* updates
        
        # if bg_rulesstart_img is starting this frame...
        if bg_rulesstart_img.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            bg_rulesstart_img.frameNStart = frameN  # exact frame index
            bg_rulesstart_img.tStart = t  # local t and not account for scr refresh
            bg_rulesstart_img.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(bg_rulesstart_img, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'bg_rulesstart_img.started')
            # update status
            bg_rulesstart_img.status = STARTED
            bg_rulesstart_img.setAutoDraw(True)
        
        # if bg_rulesstart_img is active this frame...
        if bg_rulesstart_img.status == STARTED:
            # update params
            pass
        
        # *btn_rulesstart_img* updates
        
        # if btn_rulesstart_img is starting this frame...
        if btn_rulesstart_img.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            btn_rulesstart_img.frameNStart = frameN  # exact frame index
            btn_rulesstart_img.tStart = t  # local t and not account for scr refresh
            btn_rulesstart_img.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(btn_rulesstart_img, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'btn_rulesstart_img.started')
            # update status
            btn_rulesstart_img.status = STARTED
            btn_rulesstart_img.setAutoDraw(True)
        
        # if btn_rulesstart_img is active this frame...
        if btn_rulesstart_img.status == STARTED:
            # update params
            pass
        # *click_rulesstart_mouse* updates
        
        # if click_rulesstart_mouse is starting this frame...
        if click_rulesstart_mouse.status == NOT_STARTED and t >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            click_rulesstart_mouse.frameNStart = frameN  # exact frame index
            click_rulesstart_mouse.tStart = t  # local t and not account for scr refresh
            click_rulesstart_mouse.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(click_rulesstart_mouse, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.addData('click_rulesstart_mouse.started', t)
            # update status
            click_rulesstart_mouse.status = STARTED
            click_rulesstart_mouse.mouseClock.reset()
            prevButtonState = click_rulesstart_mouse.getPressed()  # if button is down already this ISN'T a new click
        if click_rulesstart_mouse.status == STARTED:  # only update if started and not finished!
            buttons = click_rulesstart_mouse.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    # check if the mouse was inside our 'clickable' objects
                    gotValidClick = False
                    clickableList = environmenttools.getFromNames(btn_rulesstart_img, namespace=locals())
                    for obj in clickableList:
                        # is this object clicked on?
                        if obj.contains(click_rulesstart_mouse):
                            gotValidClick = True
                            click_rulesstart_mouse.clicked_name.append(obj.name)
                    if not gotValidClick:
                        click_rulesstart_mouse.clicked_name.append(None)
                    x, y = click_rulesstart_mouse.getPos()
                    click_rulesstart_mouse.x.append(float(x))
                    click_rulesstart_mouse.y.append(float(y))
                    buttons = click_rulesstart_mouse.getPressed()
                    click_rulesstart_mouse.leftButton.append(buttons[0])
                    click_rulesstart_mouse.midButton.append(buttons[1])
                    click_rulesstart_mouse.rightButton.append(buttons[2])
                    click_rulesstart_mouse.time.append(click_rulesstart_mouse.mouseClock.getTime())
                    if gotValidClick:
                        continueRoutine = False  # end routine on response
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer, globalClock], 
                currentRoutine=rules_start_screen,
            )
            # skip the frame we paused on
            continue
        
        # has a Component requested the Routine to end?
        if not continueRoutine:
            rules_start_screen.forceEnded = routineForceEnded = True
        # has the Routine been forcibly ended?
        if rules_start_screen.forceEnded or routineForceEnded:
            break
        # has every Component finished?
        continueRoutine = False
        for thisComponent in rules_start_screen.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "rules_start_screen" ---
    for thisComponent in rules_start_screen.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for rules_start_screen
    rules_start_screen.tStop = globalClock.getTime(format='float')
    rules_start_screen.tStopRefresh = tThisFlipGlobal
    thisExp.addData('rules_start_screen.stopped', rules_start_screen.tStop)
    # store data for thisExp (ExperimentHandler)
    thisExp.addData('click_rulesstart_mouse.x', click_rulesstart_mouse.x)
    thisExp.addData('click_rulesstart_mouse.y', click_rulesstart_mouse.y)
    thisExp.addData('click_rulesstart_mouse.leftButton', click_rulesstart_mouse.leftButton)
    thisExp.addData('click_rulesstart_mouse.midButton', click_rulesstart_mouse.midButton)
    thisExp.addData('click_rulesstart_mouse.rightButton', click_rulesstart_mouse.rightButton)
    thisExp.addData('click_rulesstart_mouse.time', click_rulesstart_mouse.time)
    thisExp.addData('click_rulesstart_mouse.clicked_name', click_rulesstart_mouse.clicked_name)
    thisExp.nextEntry()
    # the Routine "rules_start_screen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "rules_01_screen" ---
    # create an object to store info about Routine rules_01_screen
    rules_01_screen = data.Routine(
        name='rules_01_screen',
        components=[bg_rules01_img, btn_rules01_img, click_rules01_mouse],
    )
    rules_01_screen.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # setup some python lists for storing info about the click_rules01_mouse
    click_rules01_mouse.x = []
    click_rules01_mouse.y = []
    click_rules01_mouse.leftButton = []
    click_rules01_mouse.midButton = []
    click_rules01_mouse.rightButton = []
    click_rules01_mouse.time = []
    click_rules01_mouse.clicked_name = []
    gotValidClick = False  # until a click is received
    # store start times for rules_01_screen
    rules_01_screen.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    rules_01_screen.tStart = globalClock.getTime(format='float')
    rules_01_screen.status = STARTED
    thisExp.addData('rules_01_screen.started', rules_01_screen.tStart)
    rules_01_screen.maxDuration = None
    # keep track of which components have finished
    rules_01_screenComponents = rules_01_screen.components
    for thisComponent in rules_01_screen.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "rules_01_screen" ---
    thisExp.currentRoutine = rules_01_screen
    rules_01_screen.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *bg_rules01_img* updates
        
        # if bg_rules01_img is starting this frame...
        if bg_rules01_img.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            bg_rules01_img.frameNStart = frameN  # exact frame index
            bg_rules01_img.tStart = t  # local t and not account for scr refresh
            bg_rules01_img.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(bg_rules01_img, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'bg_rules01_img.started')
            # update status
            bg_rules01_img.status = STARTED
            bg_rules01_img.setAutoDraw(True)
        
        # if bg_rules01_img is active this frame...
        if bg_rules01_img.status == STARTED:
            # update params
            pass
        
        # *btn_rules01_img* updates
        
        # if btn_rules01_img is starting this frame...
        if btn_rules01_img.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            btn_rules01_img.frameNStart = frameN  # exact frame index
            btn_rules01_img.tStart = t  # local t and not account for scr refresh
            btn_rules01_img.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(btn_rules01_img, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'btn_rules01_img.started')
            # update status
            btn_rules01_img.status = STARTED
            btn_rules01_img.setAutoDraw(True)
        
        # if btn_rules01_img is active this frame...
        if btn_rules01_img.status == STARTED:
            # update params
            pass
        # *click_rules01_mouse* updates
        
        # if click_rules01_mouse is starting this frame...
        if click_rules01_mouse.status == NOT_STARTED and t >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            click_rules01_mouse.frameNStart = frameN  # exact frame index
            click_rules01_mouse.tStart = t  # local t and not account for scr refresh
            click_rules01_mouse.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(click_rules01_mouse, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.addData('click_rules01_mouse.started', t)
            # update status
            click_rules01_mouse.status = STARTED
            click_rules01_mouse.mouseClock.reset()
            prevButtonState = click_rules01_mouse.getPressed()  # if button is down already this ISN'T a new click
        if click_rules01_mouse.status == STARTED:  # only update if started and not finished!
            buttons = click_rules01_mouse.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    # check if the mouse was inside our 'clickable' objects
                    gotValidClick = False
                    clickableList = environmenttools.getFromNames(btn_rules01_img, namespace=locals())
                    for obj in clickableList:
                        # is this object clicked on?
                        if obj.contains(click_rules01_mouse):
                            gotValidClick = True
                            click_rules01_mouse.clicked_name.append(obj.name)
                    if not gotValidClick:
                        click_rules01_mouse.clicked_name.append(None)
                    x, y = click_rules01_mouse.getPos()
                    click_rules01_mouse.x.append(float(x))
                    click_rules01_mouse.y.append(float(y))
                    buttons = click_rules01_mouse.getPressed()
                    click_rules01_mouse.leftButton.append(buttons[0])
                    click_rules01_mouse.midButton.append(buttons[1])
                    click_rules01_mouse.rightButton.append(buttons[2])
                    click_rules01_mouse.time.append(click_rules01_mouse.mouseClock.getTime())
                    if gotValidClick:
                        continueRoutine = False  # end routine on response
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer, globalClock], 
                currentRoutine=rules_01_screen,
            )
            # skip the frame we paused on
            continue
        
        # has a Component requested the Routine to end?
        if not continueRoutine:
            rules_01_screen.forceEnded = routineForceEnded = True
        # has the Routine been forcibly ended?
        if rules_01_screen.forceEnded or routineForceEnded:
            break
        # has every Component finished?
        continueRoutine = False
        for thisComponent in rules_01_screen.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "rules_01_screen" ---
    for thisComponent in rules_01_screen.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for rules_01_screen
    rules_01_screen.tStop = globalClock.getTime(format='float')
    rules_01_screen.tStopRefresh = tThisFlipGlobal
    thisExp.addData('rules_01_screen.stopped', rules_01_screen.tStop)
    # store data for thisExp (ExperimentHandler)
    thisExp.addData('click_rules01_mouse.x', click_rules01_mouse.x)
    thisExp.addData('click_rules01_mouse.y', click_rules01_mouse.y)
    thisExp.addData('click_rules01_mouse.leftButton', click_rules01_mouse.leftButton)
    thisExp.addData('click_rules01_mouse.midButton', click_rules01_mouse.midButton)
    thisExp.addData('click_rules01_mouse.rightButton', click_rules01_mouse.rightButton)
    thisExp.addData('click_rules01_mouse.time', click_rules01_mouse.time)
    thisExp.addData('click_rules01_mouse.clicked_name', click_rules01_mouse.clicked_name)
    thisExp.nextEntry()
    # the Routine "rules_01_screen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "rules_02_screen" ---
    # create an object to store info about Routine rules_02_screen
    rules_02_screen = data.Routine(
        name='rules_02_screen',
        components=[bg_rules02_img, btn_rules02_img, click_rules02_mouse],
    )
    rules_02_screen.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # setup some python lists for storing info about the click_rules02_mouse
    click_rules02_mouse.x = []
    click_rules02_mouse.y = []
    click_rules02_mouse.leftButton = []
    click_rules02_mouse.midButton = []
    click_rules02_mouse.rightButton = []
    click_rules02_mouse.time = []
    click_rules02_mouse.clicked_name = []
    gotValidClick = False  # until a click is received
    # store start times for rules_02_screen
    rules_02_screen.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    rules_02_screen.tStart = globalClock.getTime(format='float')
    rules_02_screen.status = STARTED
    thisExp.addData('rules_02_screen.started', rules_02_screen.tStart)
    rules_02_screen.maxDuration = None
    # keep track of which components have finished
    rules_02_screenComponents = rules_02_screen.components
    for thisComponent in rules_02_screen.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "rules_02_screen" ---
    thisExp.currentRoutine = rules_02_screen
    rules_02_screen.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *bg_rules02_img* updates
        
        # if bg_rules02_img is starting this frame...
        if bg_rules02_img.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            bg_rules02_img.frameNStart = frameN  # exact frame index
            bg_rules02_img.tStart = t  # local t and not account for scr refresh
            bg_rules02_img.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(bg_rules02_img, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'bg_rules02_img.started')
            # update status
            bg_rules02_img.status = STARTED
            bg_rules02_img.setAutoDraw(True)
        
        # if bg_rules02_img is active this frame...
        if bg_rules02_img.status == STARTED:
            # update params
            pass
        
        # *btn_rules02_img* updates
        
        # if btn_rules02_img is starting this frame...
        if btn_rules02_img.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            btn_rules02_img.frameNStart = frameN  # exact frame index
            btn_rules02_img.tStart = t  # local t and not account for scr refresh
            btn_rules02_img.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(btn_rules02_img, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'btn_rules02_img.started')
            # update status
            btn_rules02_img.status = STARTED
            btn_rules02_img.setAutoDraw(True)
        
        # if btn_rules02_img is active this frame...
        if btn_rules02_img.status == STARTED:
            # update params
            pass
        # *click_rules02_mouse* updates
        
        # if click_rules02_mouse is starting this frame...
        if click_rules02_mouse.status == NOT_STARTED and t >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            click_rules02_mouse.frameNStart = frameN  # exact frame index
            click_rules02_mouse.tStart = t  # local t and not account for scr refresh
            click_rules02_mouse.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(click_rules02_mouse, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.addData('click_rules02_mouse.started', t)
            # update status
            click_rules02_mouse.status = STARTED
            click_rules02_mouse.mouseClock.reset()
            prevButtonState = click_rules02_mouse.getPressed()  # if button is down already this ISN'T a new click
        if click_rules02_mouse.status == STARTED:  # only update if started and not finished!
            buttons = click_rules02_mouse.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    # check if the mouse was inside our 'clickable' objects
                    gotValidClick = False
                    clickableList = environmenttools.getFromNames(btn_rules02_img, namespace=locals())
                    for obj in clickableList:
                        # is this object clicked on?
                        if obj.contains(click_rules02_mouse):
                            gotValidClick = True
                            click_rules02_mouse.clicked_name.append(obj.name)
                    if not gotValidClick:
                        click_rules02_mouse.clicked_name.append(None)
                    x, y = click_rules02_mouse.getPos()
                    click_rules02_mouse.x.append(float(x))
                    click_rules02_mouse.y.append(float(y))
                    buttons = click_rules02_mouse.getPressed()
                    click_rules02_mouse.leftButton.append(buttons[0])
                    click_rules02_mouse.midButton.append(buttons[1])
                    click_rules02_mouse.rightButton.append(buttons[2])
                    click_rules02_mouse.time.append(click_rules02_mouse.mouseClock.getTime())
                    if gotValidClick:
                        continueRoutine = False  # end routine on response
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer, globalClock], 
                currentRoutine=rules_02_screen,
            )
            # skip the frame we paused on
            continue
        
        # has a Component requested the Routine to end?
        if not continueRoutine:
            rules_02_screen.forceEnded = routineForceEnded = True
        # has the Routine been forcibly ended?
        if rules_02_screen.forceEnded or routineForceEnded:
            break
        # has every Component finished?
        continueRoutine = False
        for thisComponent in rules_02_screen.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "rules_02_screen" ---
    for thisComponent in rules_02_screen.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for rules_02_screen
    rules_02_screen.tStop = globalClock.getTime(format='float')
    rules_02_screen.tStopRefresh = tThisFlipGlobal
    thisExp.addData('rules_02_screen.stopped', rules_02_screen.tStop)
    # store data for thisExp (ExperimentHandler)
    thisExp.addData('click_rules02_mouse.x', click_rules02_mouse.x)
    thisExp.addData('click_rules02_mouse.y', click_rules02_mouse.y)
    thisExp.addData('click_rules02_mouse.leftButton', click_rules02_mouse.leftButton)
    thisExp.addData('click_rules02_mouse.midButton', click_rules02_mouse.midButton)
    thisExp.addData('click_rules02_mouse.rightButton', click_rules02_mouse.rightButton)
    thisExp.addData('click_rules02_mouse.time', click_rules02_mouse.time)
    thisExp.addData('click_rules02_mouse.clicked_name', click_rules02_mouse.clicked_name)
    thisExp.nextEntry()
    # the Routine "rules_02_screen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "trial_start_screen" ---
    # create an object to store info about Routine trial_start_screen
    trial_start_screen = data.Routine(
        name='trial_start_screen',
        components=[bg_trialstart_img, btn_trialstart_img, click_trialstart_mouse],
    )
    trial_start_screen.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # setup some python lists for storing info about the click_trialstart_mouse
    click_trialstart_mouse.x = []
    click_trialstart_mouse.y = []
    click_trialstart_mouse.leftButton = []
    click_trialstart_mouse.midButton = []
    click_trialstart_mouse.rightButton = []
    click_trialstart_mouse.time = []
    click_trialstart_mouse.clicked_name = []
    gotValidClick = False  # until a click is received
    # store start times for trial_start_screen
    trial_start_screen.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    trial_start_screen.tStart = globalClock.getTime(format='float')
    trial_start_screen.status = STARTED
    thisExp.addData('trial_start_screen.started', trial_start_screen.tStart)
    trial_start_screen.maxDuration = None
    # keep track of which components have finished
    trial_start_screenComponents = trial_start_screen.components
    for thisComponent in trial_start_screen.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "trial_start_screen" ---
    thisExp.currentRoutine = trial_start_screen
    trial_start_screen.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *bg_trialstart_img* updates
        
        # if bg_trialstart_img is starting this frame...
        if bg_trialstart_img.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            bg_trialstart_img.frameNStart = frameN  # exact frame index
            bg_trialstart_img.tStart = t  # local t and not account for scr refresh
            bg_trialstart_img.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(bg_trialstart_img, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'bg_trialstart_img.started')
            # update status
            bg_trialstart_img.status = STARTED
            bg_trialstart_img.setAutoDraw(True)
        
        # if bg_trialstart_img is active this frame...
        if bg_trialstart_img.status == STARTED:
            # update params
            pass
        
        # *btn_trialstart_img* updates
        
        # if btn_trialstart_img is starting this frame...
        if btn_trialstart_img.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            btn_trialstart_img.frameNStart = frameN  # exact frame index
            btn_trialstart_img.tStart = t  # local t and not account for scr refresh
            btn_trialstart_img.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(btn_trialstart_img, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'btn_trialstart_img.started')
            # update status
            btn_trialstart_img.status = STARTED
            btn_trialstart_img.setAutoDraw(True)
        
        # if btn_trialstart_img is active this frame...
        if btn_trialstart_img.status == STARTED:
            # update params
            pass
        # *click_trialstart_mouse* updates
        
        # if click_trialstart_mouse is starting this frame...
        if click_trialstart_mouse.status == NOT_STARTED and t >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            click_trialstart_mouse.frameNStart = frameN  # exact frame index
            click_trialstart_mouse.tStart = t  # local t and not account for scr refresh
            click_trialstart_mouse.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(click_trialstart_mouse, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.addData('click_trialstart_mouse.started', t)
            # update status
            click_trialstart_mouse.status = STARTED
            click_trialstart_mouse.mouseClock.reset()
            prevButtonState = click_trialstart_mouse.getPressed()  # if button is down already this ISN'T a new click
        if click_trialstart_mouse.status == STARTED:  # only update if started and not finished!
            buttons = click_trialstart_mouse.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    # check if the mouse was inside our 'clickable' objects
                    gotValidClick = False
                    clickableList = environmenttools.getFromNames(btn_trialstart_img, namespace=locals())
                    for obj in clickableList:
                        # is this object clicked on?
                        if obj.contains(click_trialstart_mouse):
                            gotValidClick = True
                            click_trialstart_mouse.clicked_name.append(obj.name)
                    if not gotValidClick:
                        click_trialstart_mouse.clicked_name.append(None)
                    x, y = click_trialstart_mouse.getPos()
                    click_trialstart_mouse.x.append(float(x))
                    click_trialstart_mouse.y.append(float(y))
                    buttons = click_trialstart_mouse.getPressed()
                    click_trialstart_mouse.leftButton.append(buttons[0])
                    click_trialstart_mouse.midButton.append(buttons[1])
                    click_trialstart_mouse.rightButton.append(buttons[2])
                    click_trialstart_mouse.time.append(click_trialstart_mouse.mouseClock.getTime())
                    if gotValidClick:
                        continueRoutine = False  # end routine on response
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer, globalClock], 
                currentRoutine=trial_start_screen,
            )
            # skip the frame we paused on
            continue
        
        # has a Component requested the Routine to end?
        if not continueRoutine:
            trial_start_screen.forceEnded = routineForceEnded = True
        # has the Routine been forcibly ended?
        if trial_start_screen.forceEnded or routineForceEnded:
            break
        # has every Component finished?
        continueRoutine = False
        for thisComponent in trial_start_screen.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "trial_start_screen" ---
    for thisComponent in trial_start_screen.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for trial_start_screen
    trial_start_screen.tStop = globalClock.getTime(format='float')
    trial_start_screen.tStopRefresh = tThisFlipGlobal
    thisExp.addData('trial_start_screen.stopped', trial_start_screen.tStop)
    # store data for thisExp (ExperimentHandler)
    thisExp.addData('click_trialstart_mouse.x', click_trialstart_mouse.x)
    thisExp.addData('click_trialstart_mouse.y', click_trialstart_mouse.y)
    thisExp.addData('click_trialstart_mouse.leftButton', click_trialstart_mouse.leftButton)
    thisExp.addData('click_trialstart_mouse.midButton', click_trialstart_mouse.midButton)
    thisExp.addData('click_trialstart_mouse.rightButton', click_trialstart_mouse.rightButton)
    thisExp.addData('click_trialstart_mouse.time', click_trialstart_mouse.time)
    thisExp.addData('click_trialstart_mouse.clicked_name', click_trialstart_mouse.clicked_name)
    thisExp.nextEntry()
    # the Routine "trial_start_screen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    train_outer_loop = data.TrialHandler2(
        name='train_outer_loop',
        nReps=None, 
        method='sequential', 
        extraInfo=expInfo, 
        originPath=-1, 
        trialList=data.importConditions(
        'concept_lists/demo.csv', 
        selection='0'
    )
    , 
        seed=None, 
        isTrials=True, 
    )
    thisExp.addLoop(train_outer_loop)  # add the loop to the experiment
    thisTrain_outer_loop = train_outer_loop.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisTrain_outer_loop.rgb)
    if thisTrain_outer_loop != None:
        for paramName in thisTrain_outer_loop:
            globals()[paramName] = thisTrain_outer_loop[paramName]
    if thisSession is not None:
        # if running in a Session with a Liaison client, send data up to now
        thisSession.sendExperimentData()
    
    for thisTrain_outer_loop in train_outer_loop:
        train_outer_loop.status = STARTED
        if hasattr(thisTrain_outer_loop, 'status'):
            thisTrain_outer_loop.status = STARTED
        currentLoop = train_outer_loop
        thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
        # abbreviate parameter names if possible (e.g. rgb = thisTrain_outer_loop.rgb)
        if thisTrain_outer_loop != None:
            for paramName in thisTrain_outer_loop:
                globals()[paramName] = thisTrain_outer_loop[paramName]
        
        # --- Prepare to start Routine "csv_selector" ---
        # create an object to store info about Routine csv_selector
        csv_selector = data.Routine(
            name='csv_selector',
            components=[],
        )
        csv_selector.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        # Run 'Begin Routine' code from pathway_construction_training
        condDir   = str(conceptno).strip()    # e.g., "conditions"
        listFile  = str(version).strip()   # e.g., "blockA.csv"
        
        filename = f"{condDir}_list{listFile}.csv"
        
        concPathTrain = os.path.join("sequences", condDir, filename)
        
        thisExp.addData('concPathTrain', concPathTrain)
        # store start times for csv_selector
        csv_selector.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        csv_selector.tStart = globalClock.getTime(format='float')
        csv_selector.status = STARTED
        thisExp.addData('csv_selector.started', csv_selector.tStart)
        csv_selector.maxDuration = None
        # keep track of which components have finished
        csv_selectorComponents = csv_selector.components
        for thisComponent in csv_selector.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "csv_selector" ---
        thisExp.currentRoutine = csv_selector
        csv_selector.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine:
            # if trial has changed, end Routine now
            if hasattr(thisTrain_outer_loop, 'status') and thisTrain_outer_loop.status == STOPPING:
                continueRoutine = False
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer, globalClock], 
                    currentRoutine=csv_selector,
                )
                # skip the frame we paused on
                continue
            
            # has a Component requested the Routine to end?
            if not continueRoutine:
                csv_selector.forceEnded = routineForceEnded = True
            # has the Routine been forcibly ended?
            if csv_selector.forceEnded or routineForceEnded:
                break
            # has every Component finished?
            continueRoutine = False
            for thisComponent in csv_selector.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "csv_selector" ---
        for thisComponent in csv_selector.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for csv_selector
        csv_selector.tStop = globalClock.getTime(format='float')
        csv_selector.tStopRefresh = tThisFlipGlobal
        thisExp.addData('csv_selector.stopped', csv_selector.tStop)
        # the Routine "csv_selector" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # set up handler to look after randomisation of conditions etc
        training_loop = data.TrialHandler2(
            name='training_loop',
            nReps=None, 
            method='sequential', 
            extraInfo=expInfo, 
            originPath=-1, 
            trialList=data.importConditions(concPathTrain), 
            seed=None, 
            isTrials=True, 
        )
        thisExp.addLoop(training_loop)  # add the loop to the experiment
        thisTraining_loop = training_loop.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisTraining_loop.rgb)
        if thisTraining_loop != None:
            for paramName in thisTraining_loop:
                globals()[paramName] = thisTraining_loop[paramName]
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
        
        for thisTraining_loop in training_loop:
            training_loop.status = STARTED
            if hasattr(thisTraining_loop, 'status'):
                thisTraining_loop.status = STARTED
            currentLoop = training_loop
            thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
            if thisSession is not None:
                # if running in a Session with a Liaison client, send data up to now
                thisSession.sendExperimentData()
            # abbreviate parameter names if possible (e.g. rgb = thisTraining_loop.rgb)
            if thisTraining_loop != None:
                for paramName in thisTraining_loop:
                    globals()[paramName] = thisTraining_loop[paramName]
            
            # --- Prepare to start Routine "train_stimulus_presentation" ---
            # create an object to store info about Routine train_stimulus_presentation
            train_stimulus_presentation = data.Routine(
                name='train_stimulus_presentation',
                components=[bg_trial_stimpres, stimulus_presentation_train, stop_training],
            )
            train_stimulus_presentation.status = NOT_STARTED
            continueRoutine = True
            # update component parameters for each repeat
            stimulus_presentation_train.setImage(feature_file)
            # create starting attributes for stop_training
            stop_training.keys = []
            stop_training.rt = []
            _stop_training_allKeys = []
            # store start times for train_stimulus_presentation
            train_stimulus_presentation.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
            train_stimulus_presentation.tStart = globalClock.getTime(format='float')
            train_stimulus_presentation.status = STARTED
            thisExp.addData('train_stimulus_presentation.started', train_stimulus_presentation.tStart)
            train_stimulus_presentation.maxDuration = float(expInfo['stimPresTime'])
            # keep track of which components have finished
            train_stimulus_presentationComponents = train_stimulus_presentation.components
            for thisComponent in train_stimulus_presentation.components:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "train_stimulus_presentation" ---
            thisExp.currentRoutine = train_stimulus_presentation
            train_stimulus_presentation.forceEnded = routineForceEnded = not continueRoutine
            while continueRoutine:
                # if trial has changed, end Routine now
                if hasattr(thisTraining_loop, 'status') and thisTraining_loop.status == STOPPING:
                    continueRoutine = False
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                # is it time to end the Routine? (based on local clock)
                if tThisFlip > train_stimulus_presentation.maxDuration-frameTolerance:
                    train_stimulus_presentation.maxDurationReached = True
                    continueRoutine = False
                
                # *bg_trial_stimpres* updates
                
                # if bg_trial_stimpres is starting this frame...
                if bg_trial_stimpres.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    bg_trial_stimpres.frameNStart = frameN  # exact frame index
                    bg_trial_stimpres.tStart = t  # local t and not account for scr refresh
                    bg_trial_stimpres.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(bg_trial_stimpres, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'bg_trial_stimpres.started')
                    # update status
                    bg_trial_stimpres.status = STARTED
                    bg_trial_stimpres.setAutoDraw(True)
                
                # if bg_trial_stimpres is active this frame...
                if bg_trial_stimpres.status == STARTED:
                    # update params
                    pass
                
                # *stimulus_presentation_train* updates
                
                # if stimulus_presentation_train is starting this frame...
                if stimulus_presentation_train.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    stimulus_presentation_train.frameNStart = frameN  # exact frame index
                    stimulus_presentation_train.tStart = t  # local t and not account for scr refresh
                    stimulus_presentation_train.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(stimulus_presentation_train, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'stimulus_presentation_train.started')
                    # update status
                    stimulus_presentation_train.status = STARTED
                    stimulus_presentation_train.setAutoDraw(True)
                
                # if stimulus_presentation_train is active this frame...
                if stimulus_presentation_train.status == STARTED:
                    # update params
                    pass
                
                # *stop_training* updates
                waitOnFlip = False
                
                # if stop_training is starting this frame...
                if stop_training.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    stop_training.frameNStart = frameN  # exact frame index
                    stop_training.tStart = t  # local t and not account for scr refresh
                    stop_training.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(stop_training, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'stop_training.started')
                    # update status
                    stop_training.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(stop_training.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(stop_training.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if stop_training.status == STARTED and not waitOnFlip:
                    theseKeys = stop_training.getKeys(keyList=['q'], ignoreKeys=["escape"], waitRelease=False)
                    _stop_training_allKeys.extend(theseKeys)
                    if len(_stop_training_allKeys):
                        stop_training.keys = _stop_training_allKeys[-1].name  # just the last key pressed
                        stop_training.rt = _stop_training_allKeys[-1].rt
                        stop_training.duration = _stop_training_allKeys[-1].duration
                # Run 'Each Frame' code from code_quit_train
                # press Q to stop the training loop
                if stop_training.keys:
                    training_loop.finished = True
                    continueRoutine = False
                
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, win=win)
                    return
                # pause experiment here if requested
                if thisExp.status == PAUSED:
                    pauseExperiment(
                        thisExp=thisExp, 
                        win=win, 
                        timers=[routineTimer, globalClock], 
                        currentRoutine=train_stimulus_presentation,
                    )
                    # skip the frame we paused on
                    continue
                
                # has a Component requested the Routine to end?
                if not continueRoutine:
                    train_stimulus_presentation.forceEnded = routineForceEnded = True
                # has the Routine been forcibly ended?
                if train_stimulus_presentation.forceEnded or routineForceEnded:
                    break
                # has every Component finished?
                continueRoutine = False
                for thisComponent in train_stimulus_presentation.components:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "train_stimulus_presentation" ---
            for thisComponent in train_stimulus_presentation.components:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # store stop times for train_stimulus_presentation
            train_stimulus_presentation.tStop = globalClock.getTime(format='float')
            train_stimulus_presentation.tStopRefresh = tThisFlipGlobal
            thisExp.addData('train_stimulus_presentation.stopped', train_stimulus_presentation.tStop)
            # check responses
            if stop_training.keys in ['', [], None]:  # No response was made
                stop_training.keys = None
            training_loop.addData('stop_training.keys',stop_training.keys)
            if stop_training.keys != None:  # we had a response
                training_loop.addData('stop_training.rt', stop_training.rt)
                training_loop.addData('stop_training.duration', stop_training.duration)
            # the Routine "train_stimulus_presentation" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            
            # --- Prepare to start Routine "train_yesno_response" ---
            # create an object to store info about Routine train_yesno_response
            train_yesno_response = data.Routine(
                name='train_yesno_response',
                components=[bg_trial_yesno, btn_yesno_yes_img, btn_yesno_no_img, trial_yesno_response, click_yesno_mouse],
            )
            train_yesno_response.status = NOT_STARTED
            continueRoutine = True
            # update component parameters for each repeat
            # create starting attributes for trial_yesno_response
            trial_yesno_response.keys = []
            trial_yesno_response.rt = []
            _trial_yesno_response_allKeys = []
            # setup some python lists for storing info about the click_yesno_mouse
            click_yesno_mouse.x = []
            click_yesno_mouse.y = []
            click_yesno_mouse.leftButton = []
            click_yesno_mouse.midButton = []
            click_yesno_mouse.rightButton = []
            click_yesno_mouse.time = []
            click_yesno_mouse.clicked_name = []
            gotValidClick = False  # until a click is received
            # store start times for train_yesno_response
            train_yesno_response.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
            train_yesno_response.tStart = globalClock.getTime(format='float')
            train_yesno_response.status = STARTED
            thisExp.addData('train_yesno_response.started', train_yesno_response.tStart)
            train_yesno_response.maxDuration = None
            # keep track of which components have finished
            train_yesno_responseComponents = train_yesno_response.components
            for thisComponent in train_yesno_response.components:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "train_yesno_response" ---
            thisExp.currentRoutine = train_yesno_response
            train_yesno_response.forceEnded = routineForceEnded = not continueRoutine
            while continueRoutine:
                # if trial has changed, end Routine now
                if hasattr(thisTraining_loop, 'status') and thisTraining_loop.status == STOPPING:
                    continueRoutine = False
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *bg_trial_yesno* updates
                
                # if bg_trial_yesno is starting this frame...
                if bg_trial_yesno.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    bg_trial_yesno.frameNStart = frameN  # exact frame index
                    bg_trial_yesno.tStart = t  # local t and not account for scr refresh
                    bg_trial_yesno.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(bg_trial_yesno, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'bg_trial_yesno.started')
                    # update status
                    bg_trial_yesno.status = STARTED
                    bg_trial_yesno.setAutoDraw(True)
                
                # if bg_trial_yesno is active this frame...
                if bg_trial_yesno.status == STARTED:
                    # update params
                    pass
                
                # *btn_yesno_yes_img* updates
                
                # if btn_yesno_yes_img is starting this frame...
                if btn_yesno_yes_img.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    btn_yesno_yes_img.frameNStart = frameN  # exact frame index
                    btn_yesno_yes_img.tStart = t  # local t and not account for scr refresh
                    btn_yesno_yes_img.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(btn_yesno_yes_img, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'btn_yesno_yes_img.started')
                    # update status
                    btn_yesno_yes_img.status = STARTED
                    btn_yesno_yes_img.setAutoDraw(True)
                
                # if btn_yesno_yes_img is active this frame...
                if btn_yesno_yes_img.status == STARTED:
                    # update params
                    pass
                
                # *btn_yesno_no_img* updates
                
                # if btn_yesno_no_img is starting this frame...
                if btn_yesno_no_img.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    btn_yesno_no_img.frameNStart = frameN  # exact frame index
                    btn_yesno_no_img.tStart = t  # local t and not account for scr refresh
                    btn_yesno_no_img.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(btn_yesno_no_img, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'btn_yesno_no_img.started')
                    # update status
                    btn_yesno_no_img.status = STARTED
                    btn_yesno_no_img.setAutoDraw(True)
                
                # if btn_yesno_no_img is active this frame...
                if btn_yesno_no_img.status == STARTED:
                    # update params
                    pass
                
                # *trial_yesno_response* updates
                waitOnFlip = False
                
                # if trial_yesno_response is starting this frame...
                if trial_yesno_response.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    trial_yesno_response.frameNStart = frameN  # exact frame index
                    trial_yesno_response.tStart = t  # local t and not account for scr refresh
                    trial_yesno_response.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(trial_yesno_response, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'trial_yesno_response.started')
                    # update status
                    trial_yesno_response.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(trial_yesno_response.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(trial_yesno_response.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if trial_yesno_response.status == STARTED and not waitOnFlip:
                    theseKeys = trial_yesno_response.getKeys(keyList=['left','right'], ignoreKeys=["escape"], waitRelease=False)
                    _trial_yesno_response_allKeys.extend(theseKeys)
                    if len(_trial_yesno_response_allKeys):
                        trial_yesno_response.keys = _trial_yesno_response_allKeys[-1].name  # just the last key pressed
                        trial_yesno_response.rt = _trial_yesno_response_allKeys[-1].rt
                        trial_yesno_response.duration = _trial_yesno_response_allKeys[-1].duration
                        # a response ends the routine
                        continueRoutine = False
                # *click_yesno_mouse* updates
                
                # if click_yesno_mouse is starting this frame...
                if click_yesno_mouse.status == NOT_STARTED and t >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    click_yesno_mouse.frameNStart = frameN  # exact frame index
                    click_yesno_mouse.tStart = t  # local t and not account for scr refresh
                    click_yesno_mouse.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(click_yesno_mouse, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.addData('click_yesno_mouse.started', t)
                    # update status
                    click_yesno_mouse.status = STARTED
                    click_yesno_mouse.mouseClock.reset()
                    prevButtonState = click_yesno_mouse.getPressed()  # if button is down already this ISN'T a new click
                if click_yesno_mouse.status == STARTED:  # only update if started and not finished!
                    buttons = click_yesno_mouse.getPressed()
                    if buttons != prevButtonState:  # button state changed?
                        prevButtonState = buttons
                        if sum(buttons) > 0:  # state changed to a new click
                            # check if the mouse was inside our 'clickable' objects
                            gotValidClick = False
                            clickableList = environmenttools.getFromNames([btn_yesno_yes_img, btn_yesno_no_img], namespace=locals())
                            for obj in clickableList:
                                # is this object clicked on?
                                if obj.contains(click_yesno_mouse):
                                    gotValidClick = True
                                    click_yesno_mouse.clicked_name.append(obj.name)
                            if not gotValidClick:
                                click_yesno_mouse.clicked_name.append(None)
                            x, y = click_yesno_mouse.getPos()
                            click_yesno_mouse.x.append(float(x))
                            click_yesno_mouse.y.append(float(y))
                            buttons = click_yesno_mouse.getPressed()
                            click_yesno_mouse.leftButton.append(buttons[0])
                            click_yesno_mouse.midButton.append(buttons[1])
                            click_yesno_mouse.rightButton.append(buttons[2])
                            click_yesno_mouse.time.append(click_yesno_mouse.mouseClock.getTime())
                            if gotValidClick:
                                continueRoutine = False  # end routine on response
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, win=win)
                    return
                # pause experiment here if requested
                if thisExp.status == PAUSED:
                    pauseExperiment(
                        thisExp=thisExp, 
                        win=win, 
                        timers=[routineTimer, globalClock], 
                        currentRoutine=train_yesno_response,
                    )
                    # skip the frame we paused on
                    continue
                
                # has a Component requested the Routine to end?
                if not continueRoutine:
                    train_yesno_response.forceEnded = routineForceEnded = True
                # has the Routine been forcibly ended?
                if train_yesno_response.forceEnded or routineForceEnded:
                    break
                # has every Component finished?
                continueRoutine = False
                for thisComponent in train_yesno_response.components:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "train_yesno_response" ---
            for thisComponent in train_yesno_response.components:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # store stop times for train_yesno_response
            train_yesno_response.tStop = globalClock.getTime(format='float')
            train_yesno_response.tStopRefresh = tThisFlipGlobal
            thisExp.addData('train_yesno_response.stopped', train_yesno_response.tStop)
            # check responses
            if trial_yesno_response.keys in ['', [], None]:  # No response was made
                trial_yesno_response.keys = None
            training_loop.addData('trial_yesno_response.keys',trial_yesno_response.keys)
            if trial_yesno_response.keys != None:  # we had a response
                training_loop.addData('trial_yesno_response.rt', trial_yesno_response.rt)
                training_loop.addData('trial_yesno_response.duration', trial_yesno_response.duration)
            # store data for training_loop (TrialHandler)
            training_loop.addData('click_yesno_mouse.x', click_yesno_mouse.x)
            training_loop.addData('click_yesno_mouse.y', click_yesno_mouse.y)
            training_loop.addData('click_yesno_mouse.leftButton', click_yesno_mouse.leftButton)
            training_loop.addData('click_yesno_mouse.midButton', click_yesno_mouse.midButton)
            training_loop.addData('click_yesno_mouse.rightButton', click_yesno_mouse.rightButton)
            training_loop.addData('click_yesno_mouse.time', click_yesno_mouse.time)
            training_loop.addData('click_yesno_mouse.clicked_name', click_yesno_mouse.clicked_name)
            # Run 'End Routine' code from training_yesno_button_placement
            # Get the last key pressed (handles list vs single value)
            _lastKey = None
            if trial_yesno_response.keys is not None:
                _lastKey = trial_yesno_response.keys[-1] if isinstance(yesno_response_train.keys, list) else trial_yesno_response.keys
            
            # Detect button click (mouse)
            _yesButtonClicked = False
            if btn_yesno_yes_img.status == FINISHED:  
                # If using a mouse component, check its.clicked_name
                if 'mouse' in locals():
                    if hasattr(mouse, 'clicked_name') and mouse.clicked_name is not None:
                        _yesButtonClicked = ('btn_yesno_yes_img' in mouse.clicked_name)
            
            # Final condition: Yes = keyboard OR button
            needTextInput = ((_lastKey in ['y', 'right']) or _yesButtonClicked)
            # the Routine "train_yesno_response" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            
            # --- Prepare to start Routine "train_written_response" ---
            # create an object to store info about Routine train_written_response
            train_written_response = data.Routine(
                name='train_written_response',
                components=[bg_trial_written, textbox_response_training, click_written_mouse, btn_written_img],
            )
            train_written_response.status = NOT_STARTED
            continueRoutine = True
            # update component parameters for each repeat
            # Run 'Begin Routine' code from code_whatconc
            # PYTHON
            # If the previous response wasn't 'y' or 'left', skip this routine
            if not needTextInput:
                continueRoutine = False
            
            # If we've seen this concept before, preload the previous text
            defaultText = previousText.get(concept, "")
            
            textbox_response_training.reset()
            textbox_response_training.setText(defaultText)
            # setup some python lists for storing info about the click_written_mouse
            click_written_mouse.x = []
            click_written_mouse.y = []
            click_written_mouse.leftButton = []
            click_written_mouse.midButton = []
            click_written_mouse.rightButton = []
            click_written_mouse.time = []
            click_written_mouse.clicked_name = []
            gotValidClick = False  # until a click is received
            # store start times for train_written_response
            train_written_response.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
            train_written_response.tStart = globalClock.getTime(format='float')
            train_written_response.status = STARTED
            thisExp.addData('train_written_response.started', train_written_response.tStart)
            train_written_response.maxDuration = None
            # keep track of which components have finished
            train_written_responseComponents = train_written_response.components
            for thisComponent in train_written_response.components:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "train_written_response" ---
            thisExp.currentRoutine = train_written_response
            train_written_response.forceEnded = routineForceEnded = not continueRoutine
            while continueRoutine:
                # if trial has changed, end Routine now
                if hasattr(thisTraining_loop, 'status') and thisTraining_loop.status == STOPPING:
                    continueRoutine = False
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *bg_trial_written* updates
                
                # if bg_trial_written is starting this frame...
                if bg_trial_written.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    bg_trial_written.frameNStart = frameN  # exact frame index
                    bg_trial_written.tStart = t  # local t and not account for scr refresh
                    bg_trial_written.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(bg_trial_written, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'bg_trial_written.started')
                    # update status
                    bg_trial_written.status = STARTED
                    bg_trial_written.setAutoDraw(True)
                
                # if bg_trial_written is active this frame...
                if bg_trial_written.status == STARTED:
                    # update params
                    pass
                
                # *textbox_response_training* updates
                
                # if textbox_response_training is starting this frame...
                if textbox_response_training.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    textbox_response_training.frameNStart = frameN  # exact frame index
                    textbox_response_training.tStart = t  # local t and not account for scr refresh
                    textbox_response_training.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(textbox_response_training, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'textbox_response_training.started')
                    # update status
                    textbox_response_training.status = STARTED
                    textbox_response_training.setAutoDraw(True)
                
                # if textbox_response_training is active this frame...
                if textbox_response_training.status == STARTED:
                    # update params
                    pass
                # *click_written_mouse* updates
                
                # if click_written_mouse is starting this frame...
                if click_written_mouse.status == NOT_STARTED and t >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    click_written_mouse.frameNStart = frameN  # exact frame index
                    click_written_mouse.tStart = t  # local t and not account for scr refresh
                    click_written_mouse.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(click_written_mouse, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.addData('click_written_mouse.started', t)
                    # update status
                    click_written_mouse.status = STARTED
                    click_written_mouse.mouseClock.reset()
                    prevButtonState = click_written_mouse.getPressed()  # if button is down already this ISN'T a new click
                if click_written_mouse.status == STARTED:  # only update if started and not finished!
                    buttons = click_written_mouse.getPressed()
                    if buttons != prevButtonState:  # button state changed?
                        prevButtonState = buttons
                        if sum(buttons) > 0:  # state changed to a new click
                            # check if the mouse was inside our 'clickable' objects
                            gotValidClick = False
                            clickableList = environmenttools.getFromNames(btn_written_img, namespace=locals())
                            for obj in clickableList:
                                # is this object clicked on?
                                if obj.contains(click_written_mouse):
                                    gotValidClick = True
                                    click_written_mouse.clicked_name.append(obj.name)
                            if not gotValidClick:
                                click_written_mouse.clicked_name.append(None)
                            x, y = click_written_mouse.getPos()
                            click_written_mouse.x.append(float(x))
                            click_written_mouse.y.append(float(y))
                            buttons = click_written_mouse.getPressed()
                            click_written_mouse.leftButton.append(buttons[0])
                            click_written_mouse.midButton.append(buttons[1])
                            click_written_mouse.rightButton.append(buttons[2])
                            click_written_mouse.time.append(click_written_mouse.mouseClock.getTime())
                            if gotValidClick:
                                continueRoutine = False  # end routine on response
                
                # *btn_written_img* updates
                
                # if btn_written_img is starting this frame...
                if btn_written_img.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    btn_written_img.frameNStart = frameN  # exact frame index
                    btn_written_img.tStart = t  # local t and not account for scr refresh
                    btn_written_img.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(btn_written_img, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'btn_written_img.started')
                    # update status
                    btn_written_img.status = STARTED
                    btn_written_img.setAutoDraw(True)
                
                # if btn_written_img is active this frame...
                if btn_written_img.status == STARTED:
                    # update params
                    pass
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, win=win)
                    return
                # pause experiment here if requested
                if thisExp.status == PAUSED:
                    pauseExperiment(
                        thisExp=thisExp, 
                        win=win, 
                        timers=[routineTimer, globalClock], 
                        currentRoutine=train_written_response,
                    )
                    # skip the frame we paused on
                    continue
                
                # has a Component requested the Routine to end?
                if not continueRoutine:
                    train_written_response.forceEnded = routineForceEnded = True
                # has the Routine been forcibly ended?
                if train_written_response.forceEnded or routineForceEnded:
                    break
                # has every Component finished?
                continueRoutine = False
                for thisComponent in train_written_response.components:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "train_written_response" ---
            for thisComponent in train_written_response.components:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # store stop times for train_written_response
            train_written_response.tStop = globalClock.getTime(format='float')
            train_written_response.tStopRefresh = tThisFlipGlobal
            thisExp.addData('train_written_response.stopped', train_written_response.tStop)
            # Run 'End Routine' code from code_whatconc
            previousText[concept] = textbox_response_training.text
            training_loop.addData('textbox_response_training.text',textbox_response_training.text)
            # store data for training_loop (TrialHandler)
            training_loop.addData('click_written_mouse.x', click_written_mouse.x)
            training_loop.addData('click_written_mouse.y', click_written_mouse.y)
            training_loop.addData('click_written_mouse.leftButton', click_written_mouse.leftButton)
            training_loop.addData('click_written_mouse.midButton', click_written_mouse.midButton)
            training_loop.addData('click_written_mouse.rightButton', click_written_mouse.rightButton)
            training_loop.addData('click_written_mouse.time', click_written_mouse.time)
            training_loop.addData('click_written_mouse.clicked_name', click_written_mouse.clicked_name)
            # the Routine "train_written_response" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            # mark thisTraining_loop as finished
            if hasattr(thisTraining_loop, 'status'):
                thisTraining_loop.status = FINISHED
            # if awaiting a pause, pause now
            if training_loop.status == PAUSED:
                thisExp.status = PAUSED
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[globalClock], 
                )
                # once done pausing, restore running status
                training_loop.status = STARTED
            thisExp.nextEntry()
            
        # completed None repeats of 'training_loop'
        training_loop.status = FINISHED
        
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
        
        # --- Prepare to start Routine "train_feedback" ---
        # create an object to store info about Routine train_feedback
        train_feedback = data.Routine(
            name='train_feedback',
            components=[bg_feedback_train, btn_feedback_img, click_feedback_mouse, feedback_concept],
        )
        train_feedback.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        # setup some python lists for storing info about the click_feedback_mouse
        click_feedback_mouse.x = []
        click_feedback_mouse.y = []
        click_feedback_mouse.leftButton = []
        click_feedback_mouse.midButton = []
        click_feedback_mouse.rightButton = []
        click_feedback_mouse.time = []
        click_feedback_mouse.clicked_name = []
        gotValidClick = False  # until a click is received
        feedback_concept.setText(concept)
        # store start times for train_feedback
        train_feedback.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        train_feedback.tStart = globalClock.getTime(format='float')
        train_feedback.status = STARTED
        thisExp.addData('train_feedback.started', train_feedback.tStart)
        train_feedback.maxDuration = 3
        # skip Routine train_feedback if its 'Skip if' condition is True
        train_feedback.skipped = continueRoutine and not (not showFeedback)
        continueRoutine = train_feedback.skipped
        # keep track of which components have finished
        train_feedbackComponents = train_feedback.components
        for thisComponent in train_feedback.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "train_feedback" ---
        thisExp.currentRoutine = train_feedback
        train_feedback.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine:
            # if trial has changed, end Routine now
            if hasattr(thisTrain_outer_loop, 'status') and thisTrain_outer_loop.status == STOPPING:
                continueRoutine = False
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            # is it time to end the Routine? (based on local clock)
            if tThisFlip > train_feedback.maxDuration-frameTolerance:
                train_feedback.maxDurationReached = True
                continueRoutine = False
            
            # *bg_feedback_train* updates
            
            # if bg_feedback_train is starting this frame...
            if bg_feedback_train.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                bg_feedback_train.frameNStart = frameN  # exact frame index
                bg_feedback_train.tStart = t  # local t and not account for scr refresh
                bg_feedback_train.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(bg_feedback_train, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'bg_feedback_train.started')
                # update status
                bg_feedback_train.status = STARTED
                bg_feedback_train.setAutoDraw(True)
            
            # if bg_feedback_train is active this frame...
            if bg_feedback_train.status == STARTED:
                # update params
                pass
            
            # *btn_feedback_img* updates
            
            # if btn_feedback_img is starting this frame...
            if btn_feedback_img.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                btn_feedback_img.frameNStart = frameN  # exact frame index
                btn_feedback_img.tStart = t  # local t and not account for scr refresh
                btn_feedback_img.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(btn_feedback_img, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'btn_feedback_img.started')
                # update status
                btn_feedback_img.status = STARTED
                btn_feedback_img.setAutoDraw(True)
            
            # if btn_feedback_img is active this frame...
            if btn_feedback_img.status == STARTED:
                # update params
                pass
            # *click_feedback_mouse* updates
            
            # if click_feedback_mouse is starting this frame...
            if click_feedback_mouse.status == NOT_STARTED and t >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                click_feedback_mouse.frameNStart = frameN  # exact frame index
                click_feedback_mouse.tStart = t  # local t and not account for scr refresh
                click_feedback_mouse.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(click_feedback_mouse, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.addData('click_feedback_mouse.started', t)
                # update status
                click_feedback_mouse.status = STARTED
                click_feedback_mouse.mouseClock.reset()
                prevButtonState = click_feedback_mouse.getPressed()  # if button is down already this ISN'T a new click
            if click_feedback_mouse.status == STARTED:  # only update if started and not finished!
                buttons = click_feedback_mouse.getPressed()
                if buttons != prevButtonState:  # button state changed?
                    prevButtonState = buttons
                    if sum(buttons) > 0:  # state changed to a new click
                        # check if the mouse was inside our 'clickable' objects
                        gotValidClick = False
                        clickableList = environmenttools.getFromNames(btn_feedback_img, namespace=locals())
                        for obj in clickableList:
                            # is this object clicked on?
                            if obj.contains(click_feedback_mouse):
                                gotValidClick = True
                                click_feedback_mouse.clicked_name.append(obj.name)
                        if not gotValidClick:
                            click_feedback_mouse.clicked_name.append(None)
                        x, y = click_feedback_mouse.getPos()
                        click_feedback_mouse.x.append(float(x))
                        click_feedback_mouse.y.append(float(y))
                        buttons = click_feedback_mouse.getPressed()
                        click_feedback_mouse.leftButton.append(buttons[0])
                        click_feedback_mouse.midButton.append(buttons[1])
                        click_feedback_mouse.rightButton.append(buttons[2])
                        click_feedback_mouse.time.append(click_feedback_mouse.mouseClock.getTime())
                        if gotValidClick:
                            continueRoutine = False  # end routine on response
            
            # *feedback_concept* updates
            
            # if feedback_concept is starting this frame...
            if feedback_concept.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                feedback_concept.frameNStart = frameN  # exact frame index
                feedback_concept.tStart = t  # local t and not account for scr refresh
                feedback_concept.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(feedback_concept, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'feedback_concept.started')
                # update status
                feedback_concept.status = STARTED
                feedback_concept.setAutoDraw(True)
            
            # if feedback_concept is active this frame...
            if feedback_concept.status == STARTED:
                # update params
                pass
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer, globalClock], 
                    currentRoutine=train_feedback,
                )
                # skip the frame we paused on
                continue
            
            # has a Component requested the Routine to end?
            if not continueRoutine:
                train_feedback.forceEnded = routineForceEnded = True
            # has the Routine been forcibly ended?
            if train_feedback.forceEnded or routineForceEnded:
                break
            # has every Component finished?
            continueRoutine = False
            for thisComponent in train_feedback.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "train_feedback" ---
        for thisComponent in train_feedback.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for train_feedback
        train_feedback.tStop = globalClock.getTime(format='float')
        train_feedback.tStopRefresh = tThisFlipGlobal
        thisExp.addData('train_feedback.stopped', train_feedback.tStop)
        # store data for train_outer_loop (TrialHandler)
        train_outer_loop.addData('click_feedback_mouse.x', click_feedback_mouse.x)
        train_outer_loop.addData('click_feedback_mouse.y', click_feedback_mouse.y)
        train_outer_loop.addData('click_feedback_mouse.leftButton', click_feedback_mouse.leftButton)
        train_outer_loop.addData('click_feedback_mouse.midButton', click_feedback_mouse.midButton)
        train_outer_loop.addData('click_feedback_mouse.rightButton', click_feedback_mouse.rightButton)
        train_outer_loop.addData('click_feedback_mouse.time', click_feedback_mouse.time)
        train_outer_loop.addData('click_feedback_mouse.clicked_name', click_feedback_mouse.clicked_name)
        # the Routine "train_feedback" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        # mark thisTrain_outer_loop as finished
        if hasattr(thisTrain_outer_loop, 'status'):
            thisTrain_outer_loop.status = FINISHED
        # if awaiting a pause, pause now
        if train_outer_loop.status == PAUSED:
            thisExp.status = PAUSED
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[globalClock], 
            )
            # once done pausing, restore running status
            train_outer_loop.status = STARTED
        thisExp.nextEntry()
        
    # completed None repeats of 'train_outer_loop'
    train_outer_loop.status = FINISHED
    
    if thisSession is not None:
        # if running in a Session with a Liaison client, send data up to now
        thisSession.sendExperimentData()
    
    # --- Prepare to start Routine "main_start_screen" ---
    # create an object to store info about Routine main_start_screen
    main_start_screen = data.Routine(
        name='main_start_screen',
        components=[bg_mainstart_img, btn_mainstart_img, click_mainstart_mouse],
    )
    main_start_screen.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # setup some python lists for storing info about the click_mainstart_mouse
    click_mainstart_mouse.x = []
    click_mainstart_mouse.y = []
    click_mainstart_mouse.leftButton = []
    click_mainstart_mouse.midButton = []
    click_mainstart_mouse.rightButton = []
    click_mainstart_mouse.time = []
    click_mainstart_mouse.clicked_name = []
    gotValidClick = False  # until a click is received
    # store start times for main_start_screen
    main_start_screen.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    main_start_screen.tStart = globalClock.getTime(format='float')
    main_start_screen.status = STARTED
    thisExp.addData('main_start_screen.started', main_start_screen.tStart)
    main_start_screen.maxDuration = None
    # keep track of which components have finished
    main_start_screenComponents = main_start_screen.components
    for thisComponent in main_start_screen.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "main_start_screen" ---
    thisExp.currentRoutine = main_start_screen
    main_start_screen.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *bg_mainstart_img* updates
        
        # if bg_mainstart_img is starting this frame...
        if bg_mainstart_img.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            bg_mainstart_img.frameNStart = frameN  # exact frame index
            bg_mainstart_img.tStart = t  # local t and not account for scr refresh
            bg_mainstart_img.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(bg_mainstart_img, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'bg_mainstart_img.started')
            # update status
            bg_mainstart_img.status = STARTED
            bg_mainstart_img.setAutoDraw(True)
        
        # if bg_mainstart_img is active this frame...
        if bg_mainstart_img.status == STARTED:
            # update params
            pass
        
        # *btn_mainstart_img* updates
        
        # if btn_mainstart_img is starting this frame...
        if btn_mainstart_img.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            btn_mainstart_img.frameNStart = frameN  # exact frame index
            btn_mainstart_img.tStart = t  # local t and not account for scr refresh
            btn_mainstart_img.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(btn_mainstart_img, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'btn_mainstart_img.started')
            # update status
            btn_mainstart_img.status = STARTED
            btn_mainstart_img.setAutoDraw(True)
        
        # if btn_mainstart_img is active this frame...
        if btn_mainstart_img.status == STARTED:
            # update params
            pass
        # *click_mainstart_mouse* updates
        
        # if click_mainstart_mouse is starting this frame...
        if click_mainstart_mouse.status == NOT_STARTED and t >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            click_mainstart_mouse.frameNStart = frameN  # exact frame index
            click_mainstart_mouse.tStart = t  # local t and not account for scr refresh
            click_mainstart_mouse.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(click_mainstart_mouse, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.addData('click_mainstart_mouse.started', t)
            # update status
            click_mainstart_mouse.status = STARTED
            click_mainstart_mouse.mouseClock.reset()
            prevButtonState = click_mainstart_mouse.getPressed()  # if button is down already this ISN'T a new click
        if click_mainstart_mouse.status == STARTED:  # only update if started and not finished!
            buttons = click_mainstart_mouse.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    # check if the mouse was inside our 'clickable' objects
                    gotValidClick = False
                    clickableList = environmenttools.getFromNames(btn_mainstart_img, namespace=locals())
                    for obj in clickableList:
                        # is this object clicked on?
                        if obj.contains(click_mainstart_mouse):
                            gotValidClick = True
                            click_mainstart_mouse.clicked_name.append(obj.name)
                    if not gotValidClick:
                        click_mainstart_mouse.clicked_name.append(None)
                    x, y = click_mainstart_mouse.getPos()
                    click_mainstart_mouse.x.append(float(x))
                    click_mainstart_mouse.y.append(float(y))
                    buttons = click_mainstart_mouse.getPressed()
                    click_mainstart_mouse.leftButton.append(buttons[0])
                    click_mainstart_mouse.midButton.append(buttons[1])
                    click_mainstart_mouse.rightButton.append(buttons[2])
                    click_mainstart_mouse.time.append(click_mainstart_mouse.mouseClock.getTime())
                    if gotValidClick:
                        continueRoutine = False  # end routine on response
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer, globalClock], 
                currentRoutine=main_start_screen,
            )
            # skip the frame we paused on
            continue
        
        # has a Component requested the Routine to end?
        if not continueRoutine:
            main_start_screen.forceEnded = routineForceEnded = True
        # has the Routine been forcibly ended?
        if main_start_screen.forceEnded or routineForceEnded:
            break
        # has every Component finished?
        continueRoutine = False
        for thisComponent in main_start_screen.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "main_start_screen" ---
    for thisComponent in main_start_screen.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for main_start_screen
    main_start_screen.tStop = globalClock.getTime(format='float')
    main_start_screen.tStopRefresh = tThisFlipGlobal
    thisExp.addData('main_start_screen.stopped', main_start_screen.tStop)
    # store data for thisExp (ExperimentHandler)
    thisExp.addData('click_mainstart_mouse.x', click_mainstart_mouse.x)
    thisExp.addData('click_mainstart_mouse.y', click_mainstart_mouse.y)
    thisExp.addData('click_mainstart_mouse.leftButton', click_mainstart_mouse.leftButton)
    thisExp.addData('click_mainstart_mouse.midButton', click_mainstart_mouse.midButton)
    thisExp.addData('click_mainstart_mouse.rightButton', click_mainstart_mouse.rightButton)
    thisExp.addData('click_mainstart_mouse.time', click_mainstart_mouse.time)
    thisExp.addData('click_mainstart_mouse.clicked_name', click_mainstart_mouse.clicked_name)
    thisExp.nextEntry()
    # the Routine "main_start_screen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    main_loop = data.TrialHandler2(
        name='main_loop',
        nReps=1.0, 
        method='sequential', 
        extraInfo=expInfo, 
        originPath=-1, 
        trialList=data.importConditions('sequences/main_modified.csv'), 
        seed=None, 
        isTrials=True, 
    )
    thisExp.addLoop(main_loop)  # add the loop to the experiment
    thisMain_loop = main_loop.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisMain_loop.rgb)
    if thisMain_loop != None:
        for paramName in thisMain_loop:
            globals()[paramName] = thisMain_loop[paramName]
    if thisSession is not None:
        # if running in a Session with a Liaison client, send data up to now
        thisSession.sendExperimentData()
    
    for thisMain_loop in main_loop:
        main_loop.status = STARTED
        if hasattr(thisMain_loop, 'status'):
            thisMain_loop.status = STARTED
        currentLoop = main_loop
        thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
        # abbreviate parameter names if possible (e.g. rgb = thisMain_loop.rgb)
        if thisMain_loop != None:
            for paramName in thisMain_loop:
                globals()[paramName] = thisMain_loop[paramName]
        
        # --- Prepare to start Routine "main_stimulus_presentation" ---
        # create an object to store info about Routine main_stimulus_presentation
        main_stimulus_presentation = data.Routine(
            name='main_stimulus_presentation',
            components=[bg_main_stimpres, stimulus_presentation_main],
        )
        main_stimulus_presentation.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        stimulus_presentation_main.setImage(stimulus)
        # store start times for main_stimulus_presentation
        main_stimulus_presentation.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        main_stimulus_presentation.tStart = globalClock.getTime(format='float')
        main_stimulus_presentation.status = STARTED
        thisExp.addData('main_stimulus_presentation.started', main_stimulus_presentation.tStart)
        main_stimulus_presentation.maxDuration = float(expInfo['stimPresTime'])
        # keep track of which components have finished
        main_stimulus_presentationComponents = main_stimulus_presentation.components
        for thisComponent in main_stimulus_presentation.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "main_stimulus_presentation" ---
        thisExp.currentRoutine = main_stimulus_presentation
        main_stimulus_presentation.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine:
            # if trial has changed, end Routine now
            if hasattr(thisMain_loop, 'status') and thisMain_loop.status == STOPPING:
                continueRoutine = False
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            # is it time to end the Routine? (based on local clock)
            if tThisFlip > main_stimulus_presentation.maxDuration-frameTolerance:
                main_stimulus_presentation.maxDurationReached = True
                continueRoutine = False
            
            # *bg_main_stimpres* updates
            
            # if bg_main_stimpres is starting this frame...
            if bg_main_stimpres.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                bg_main_stimpres.frameNStart = frameN  # exact frame index
                bg_main_stimpres.tStart = t  # local t and not account for scr refresh
                bg_main_stimpres.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(bg_main_stimpres, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'bg_main_stimpres.started')
                # update status
                bg_main_stimpres.status = STARTED
                bg_main_stimpres.setAutoDraw(True)
            
            # if bg_main_stimpres is active this frame...
            if bg_main_stimpres.status == STARTED:
                # update params
                pass
            
            # *stimulus_presentation_main* updates
            
            # if stimulus_presentation_main is starting this frame...
            if stimulus_presentation_main.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                stimulus_presentation_main.frameNStart = frameN  # exact frame index
                stimulus_presentation_main.tStart = t  # local t and not account for scr refresh
                stimulus_presentation_main.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(stimulus_presentation_main, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'stimulus_presentation_main.started')
                # update status
                stimulus_presentation_main.status = STARTED
                stimulus_presentation_main.setAutoDraw(True)
            
            # if stimulus_presentation_main is active this frame...
            if stimulus_presentation_main.status == STARTED:
                # update params
                pass
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer, globalClock], 
                    currentRoutine=main_stimulus_presentation,
                )
                # skip the frame we paused on
                continue
            
            # has a Component requested the Routine to end?
            if not continueRoutine:
                main_stimulus_presentation.forceEnded = routineForceEnded = True
            # has the Routine been forcibly ended?
            if main_stimulus_presentation.forceEnded or routineForceEnded:
                break
            # has every Component finished?
            continueRoutine = False
            for thisComponent in main_stimulus_presentation.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "main_stimulus_presentation" ---
        for thisComponent in main_stimulus_presentation.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for main_stimulus_presentation
        main_stimulus_presentation.tStop = globalClock.getTime(format='float')
        main_stimulus_presentation.tStopRefresh = tThisFlipGlobal
        thisExp.addData('main_stimulus_presentation.stopped', main_stimulus_presentation.tStop)
        # the Routine "main_stimulus_presentation" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # --- Prepare to start Routine "main_yesno_response" ---
        # create an object to store info about Routine main_yesno_response
        main_yesno_response = data.Routine(
            name='main_yesno_response',
            components=[bg_main_yesno, btn_yesno_yes_main, btn_yesno_no_main, main_yesno_key_response, main_yesno_mouse],
        )
        main_yesno_response.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        # create starting attributes for main_yesno_key_response
        main_yesno_key_response.keys = []
        main_yesno_key_response.rt = []
        _main_yesno_key_response_allKeys = []
        # setup some python lists for storing info about the main_yesno_mouse
        main_yesno_mouse.x = []
        main_yesno_mouse.y = []
        main_yesno_mouse.leftButton = []
        main_yesno_mouse.midButton = []
        main_yesno_mouse.rightButton = []
        main_yesno_mouse.time = []
        main_yesno_mouse.clicked_name = []
        gotValidClick = False  # until a click is received
        # store start times for main_yesno_response
        main_yesno_response.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        main_yesno_response.tStart = globalClock.getTime(format='float')
        main_yesno_response.status = STARTED
        thisExp.addData('main_yesno_response.started', main_yesno_response.tStart)
        main_yesno_response.maxDuration = None
        # keep track of which components have finished
        main_yesno_responseComponents = main_yesno_response.components
        for thisComponent in main_yesno_response.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "main_yesno_response" ---
        thisExp.currentRoutine = main_yesno_response
        main_yesno_response.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine:
            # if trial has changed, end Routine now
            if hasattr(thisMain_loop, 'status') and thisMain_loop.status == STOPPING:
                continueRoutine = False
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *bg_main_yesno* updates
            
            # if bg_main_yesno is starting this frame...
            if bg_main_yesno.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                bg_main_yesno.frameNStart = frameN  # exact frame index
                bg_main_yesno.tStart = t  # local t and not account for scr refresh
                bg_main_yesno.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(bg_main_yesno, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'bg_main_yesno.started')
                # update status
                bg_main_yesno.status = STARTED
                bg_main_yesno.setAutoDraw(True)
            
            # if bg_main_yesno is active this frame...
            if bg_main_yesno.status == STARTED:
                # update params
                pass
            
            # *btn_yesno_yes_main* updates
            
            # if btn_yesno_yes_main is starting this frame...
            if btn_yesno_yes_main.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                btn_yesno_yes_main.frameNStart = frameN  # exact frame index
                btn_yesno_yes_main.tStart = t  # local t and not account for scr refresh
                btn_yesno_yes_main.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(btn_yesno_yes_main, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'btn_yesno_yes_main.started')
                # update status
                btn_yesno_yes_main.status = STARTED
                btn_yesno_yes_main.setAutoDraw(True)
            
            # if btn_yesno_yes_main is active this frame...
            if btn_yesno_yes_main.status == STARTED:
                # update params
                pass
            
            # *btn_yesno_no_main* updates
            
            # if btn_yesno_no_main is starting this frame...
            if btn_yesno_no_main.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                btn_yesno_no_main.frameNStart = frameN  # exact frame index
                btn_yesno_no_main.tStart = t  # local t and not account for scr refresh
                btn_yesno_no_main.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(btn_yesno_no_main, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'btn_yesno_no_main.started')
                # update status
                btn_yesno_no_main.status = STARTED
                btn_yesno_no_main.setAutoDraw(True)
            
            # if btn_yesno_no_main is active this frame...
            if btn_yesno_no_main.status == STARTED:
                # update params
                pass
            
            # *main_yesno_key_response* updates
            waitOnFlip = False
            
            # if main_yesno_key_response is starting this frame...
            if main_yesno_key_response.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                main_yesno_key_response.frameNStart = frameN  # exact frame index
                main_yesno_key_response.tStart = t  # local t and not account for scr refresh
                main_yesno_key_response.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(main_yesno_key_response, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'main_yesno_key_response.started')
                # update status
                main_yesno_key_response.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(main_yesno_key_response.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(main_yesno_key_response.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if main_yesno_key_response.status == STARTED and not waitOnFlip:
                theseKeys = main_yesno_key_response.getKeys(keyList=['left','right'], ignoreKeys=["escape"], waitRelease=False)
                _main_yesno_key_response_allKeys.extend(theseKeys)
                if len(_main_yesno_key_response_allKeys):
                    main_yesno_key_response.keys = _main_yesno_key_response_allKeys[-1].name  # just the last key pressed
                    main_yesno_key_response.rt = _main_yesno_key_response_allKeys[-1].rt
                    main_yesno_key_response.duration = _main_yesno_key_response_allKeys[-1].duration
                    # a response ends the routine
                    continueRoutine = False
            # *main_yesno_mouse* updates
            
            # if main_yesno_mouse is starting this frame...
            if main_yesno_mouse.status == NOT_STARTED and t >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                main_yesno_mouse.frameNStart = frameN  # exact frame index
                main_yesno_mouse.tStart = t  # local t and not account for scr refresh
                main_yesno_mouse.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(main_yesno_mouse, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.addData('main_yesno_mouse.started', t)
                # update status
                main_yesno_mouse.status = STARTED
                main_yesno_mouse.mouseClock.reset()
                prevButtonState = main_yesno_mouse.getPressed()  # if button is down already this ISN'T a new click
            if main_yesno_mouse.status == STARTED:  # only update if started and not finished!
                buttons = main_yesno_mouse.getPressed()
                if buttons != prevButtonState:  # button state changed?
                    prevButtonState = buttons
                    if sum(buttons) > 0:  # state changed to a new click
                        # check if the mouse was inside our 'clickable' objects
                        gotValidClick = False
                        clickableList = environmenttools.getFromNames([btn_yesno_yes_main, btn_yesno_no_main], namespace=locals())
                        for obj in clickableList:
                            # is this object clicked on?
                            if obj.contains(main_yesno_mouse):
                                gotValidClick = True
                                main_yesno_mouse.clicked_name.append(obj.name)
                        if not gotValidClick:
                            main_yesno_mouse.clicked_name.append(None)
                        x, y = main_yesno_mouse.getPos()
                        main_yesno_mouse.x.append(float(x))
                        main_yesno_mouse.y.append(float(y))
                        buttons = main_yesno_mouse.getPressed()
                        main_yesno_mouse.leftButton.append(buttons[0])
                        main_yesno_mouse.midButton.append(buttons[1])
                        main_yesno_mouse.rightButton.append(buttons[2])
                        main_yesno_mouse.time.append(main_yesno_mouse.mouseClock.getTime())
                        if gotValidClick:
                            continueRoutine = False  # end routine on response
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer, globalClock], 
                    currentRoutine=main_yesno_response,
                )
                # skip the frame we paused on
                continue
            
            # has a Component requested the Routine to end?
            if not continueRoutine:
                main_yesno_response.forceEnded = routineForceEnded = True
            # has the Routine been forcibly ended?
            if main_yesno_response.forceEnded or routineForceEnded:
                break
            # has every Component finished?
            continueRoutine = False
            for thisComponent in main_yesno_response.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "main_yesno_response" ---
        for thisComponent in main_yesno_response.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for main_yesno_response
        main_yesno_response.tStop = globalClock.getTime(format='float')
        main_yesno_response.tStopRefresh = tThisFlipGlobal
        thisExp.addData('main_yesno_response.stopped', main_yesno_response.tStop)
        # check responses
        if main_yesno_key_response.keys in ['', [], None]:  # No response was made
            main_yesno_key_response.keys = None
        main_loop.addData('main_yesno_key_response.keys',main_yesno_key_response.keys)
        if main_yesno_key_response.keys != None:  # we had a response
            main_loop.addData('main_yesno_key_response.rt', main_yesno_key_response.rt)
            main_loop.addData('main_yesno_key_response.duration', main_yesno_key_response.duration)
        # store data for main_loop (TrialHandler)
        main_loop.addData('main_yesno_mouse.x', main_yesno_mouse.x)
        main_loop.addData('main_yesno_mouse.y', main_yesno_mouse.y)
        main_loop.addData('main_yesno_mouse.leftButton', main_yesno_mouse.leftButton)
        main_loop.addData('main_yesno_mouse.midButton', main_yesno_mouse.midButton)
        main_loop.addData('main_yesno_mouse.rightButton', main_yesno_mouse.rightButton)
        main_loop.addData('main_yesno_mouse.time', main_yesno_mouse.time)
        main_loop.addData('main_yesno_mouse.clicked_name', main_yesno_mouse.clicked_name)
        # Run 'End Routine' code from main_yesno_button_placement
        # Get the last key pressed (handles list vs single value)
        _lastKey = None
        if main_yesno_key_response.keys is not None:
            _lastKey = main_yesno_key_response.keys[-1] if isinstance(main_yesno_key_response.keys, list) else main_yesno_key_response.keys
        
        # Detect button click (mouse)
        _yesButtonClicked = False
        if btn_yesno_yes_main.status == FINISHED:  
            # If using a mouse component, check its.clicked_name
            if 'mouse' in locals():
                if hasattr(mouse, 'clicked_name') and mouse.clicked_name is not None:
                    _yesButtonClicked = ('btn_yesno_yes_main' in mouse.clicked_name)
        
        # Final condition: Yes = keyboard OR button
        needTextInput = ((_lastKey in ['y', 'right']) or _yesButtonClicked)
        # the Routine "main_yesno_response" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # --- Prepare to start Routine "main_written_response" ---
        # create an object to store info about Routine main_written_response
        main_written_response = data.Routine(
            name='main_written_response',
            components=[bg_main_written, textbox_response_main, main_written_mouse, btn_written_main],
        )
        main_written_response.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        # Run 'Begin Routine' code from code_whatconc_main
        # PYTHON
        # If the previous response wasn't 'y' or 'left', skip this routine
        if not needTextInput:
            continueRoutine = False
        
        # If we've seen this concept before, preload the previous text
        defaultText = previousText.get(concept, "")
        
        textbox_response_main.reset()
        textbox_response_main.setText(defaultText)
        # setup some python lists for storing info about the main_written_mouse
        main_written_mouse.x = []
        main_written_mouse.y = []
        main_written_mouse.leftButton = []
        main_written_mouse.midButton = []
        main_written_mouse.rightButton = []
        main_written_mouse.time = []
        main_written_mouse.clicked_name = []
        gotValidClick = False  # until a click is received
        # store start times for main_written_response
        main_written_response.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        main_written_response.tStart = globalClock.getTime(format='float')
        main_written_response.status = STARTED
        thisExp.addData('main_written_response.started', main_written_response.tStart)
        main_written_response.maxDuration = None
        # keep track of which components have finished
        main_written_responseComponents = main_written_response.components
        for thisComponent in main_written_response.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "main_written_response" ---
        thisExp.currentRoutine = main_written_response
        main_written_response.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine:
            # if trial has changed, end Routine now
            if hasattr(thisMain_loop, 'status') and thisMain_loop.status == STOPPING:
                continueRoutine = False
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *bg_main_written* updates
            
            # if bg_main_written is starting this frame...
            if bg_main_written.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                bg_main_written.frameNStart = frameN  # exact frame index
                bg_main_written.tStart = t  # local t and not account for scr refresh
                bg_main_written.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(bg_main_written, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'bg_main_written.started')
                # update status
                bg_main_written.status = STARTED
                bg_main_written.setAutoDraw(True)
            
            # if bg_main_written is active this frame...
            if bg_main_written.status == STARTED:
                # update params
                pass
            
            # *textbox_response_main* updates
            
            # if textbox_response_main is starting this frame...
            if textbox_response_main.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                textbox_response_main.frameNStart = frameN  # exact frame index
                textbox_response_main.tStart = t  # local t and not account for scr refresh
                textbox_response_main.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(textbox_response_main, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'textbox_response_main.started')
                # update status
                textbox_response_main.status = STARTED
                textbox_response_main.setAutoDraw(True)
            
            # if textbox_response_main is active this frame...
            if textbox_response_main.status == STARTED:
                # update params
                pass
            # *main_written_mouse* updates
            
            # if main_written_mouse is starting this frame...
            if main_written_mouse.status == NOT_STARTED and t >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                main_written_mouse.frameNStart = frameN  # exact frame index
                main_written_mouse.tStart = t  # local t and not account for scr refresh
                main_written_mouse.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(main_written_mouse, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.addData('main_written_mouse.started', t)
                # update status
                main_written_mouse.status = STARTED
                main_written_mouse.mouseClock.reset()
                prevButtonState = main_written_mouse.getPressed()  # if button is down already this ISN'T a new click
            if main_written_mouse.status == STARTED:  # only update if started and not finished!
                buttons = main_written_mouse.getPressed()
                if buttons != prevButtonState:  # button state changed?
                    prevButtonState = buttons
                    if sum(buttons) > 0:  # state changed to a new click
                        # check if the mouse was inside our 'clickable' objects
                        gotValidClick = False
                        clickableList = environmenttools.getFromNames(btn_written_main, namespace=locals())
                        for obj in clickableList:
                            # is this object clicked on?
                            if obj.contains(main_written_mouse):
                                gotValidClick = True
                                main_written_mouse.clicked_name.append(obj.name)
                        if not gotValidClick:
                            main_written_mouse.clicked_name.append(None)
                        x, y = main_written_mouse.getPos()
                        main_written_mouse.x.append(float(x))
                        main_written_mouse.y.append(float(y))
                        buttons = main_written_mouse.getPressed()
                        main_written_mouse.leftButton.append(buttons[0])
                        main_written_mouse.midButton.append(buttons[1])
                        main_written_mouse.rightButton.append(buttons[2])
                        main_written_mouse.time.append(main_written_mouse.mouseClock.getTime())
                        if gotValidClick:
                            continueRoutine = False  # end routine on response
            
            # *btn_written_main* updates
            
            # if btn_written_main is starting this frame...
            if btn_written_main.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                btn_written_main.frameNStart = frameN  # exact frame index
                btn_written_main.tStart = t  # local t and not account for scr refresh
                btn_written_main.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(btn_written_main, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'btn_written_main.started')
                # update status
                btn_written_main.status = STARTED
                btn_written_main.setAutoDraw(True)
            
            # if btn_written_main is active this frame...
            if btn_written_main.status == STARTED:
                # update params
                pass
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer, globalClock], 
                    currentRoutine=main_written_response,
                )
                # skip the frame we paused on
                continue
            
            # has a Component requested the Routine to end?
            if not continueRoutine:
                main_written_response.forceEnded = routineForceEnded = True
            # has the Routine been forcibly ended?
            if main_written_response.forceEnded or routineForceEnded:
                break
            # has every Component finished?
            continueRoutine = False
            for thisComponent in main_written_response.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "main_written_response" ---
        for thisComponent in main_written_response.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for main_written_response
        main_written_response.tStop = globalClock.getTime(format='float')
        main_written_response.tStopRefresh = tThisFlipGlobal
        thisExp.addData('main_written_response.stopped', main_written_response.tStop)
        # Run 'End Routine' code from code_whatconc_main
        previousText[concept] = textbox_response_main.text
        main_loop.addData('textbox_response_main.text',textbox_response_main.text)
        # store data for main_loop (TrialHandler)
        main_loop.addData('main_written_mouse.x', main_written_mouse.x)
        main_loop.addData('main_written_mouse.y', main_written_mouse.y)
        main_loop.addData('main_written_mouse.leftButton', main_written_mouse.leftButton)
        main_loop.addData('main_written_mouse.midButton', main_written_mouse.midButton)
        main_loop.addData('main_written_mouse.rightButton', main_written_mouse.rightButton)
        main_loop.addData('main_written_mouse.time', main_written_mouse.time)
        main_loop.addData('main_written_mouse.clicked_name', main_written_mouse.clicked_name)
        # Run 'End Routine' code from written_button_placement_main
        # Default
        showFeedback = False
        
        loop = main_loop
        
        # If this is the last trial
        if loop.thisN == (loop.nTotal - 1):
            showFeedback = True
        else:
            nextRow = loop.trialList[loop.thisN + 1]
            if nextRow is not None and 'concept' in nextRow:
                if nextRow['concept'] != concept:
                    showFeedback = True
            else:
                showFeedback = True
        # the Routine "main_written_response" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # --- Prepare to start Routine "main_feedback" ---
        # create an object to store info about Routine main_feedback
        main_feedback = data.Routine(
            name='main_feedback',
            components=[bg_feedback_main, btn_feedback_main, main_feedback_mouse, feedback_concept_main],
        )
        main_feedback.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        # setup some python lists for storing info about the main_feedback_mouse
        main_feedback_mouse.x = []
        main_feedback_mouse.y = []
        main_feedback_mouse.leftButton = []
        main_feedback_mouse.midButton = []
        main_feedback_mouse.rightButton = []
        main_feedback_mouse.time = []
        main_feedback_mouse.clicked_name = []
        gotValidClick = False  # until a click is received
        feedback_concept_main.setText(concept)
        # store start times for main_feedback
        main_feedback.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        main_feedback.tStart = globalClock.getTime(format='float')
        main_feedback.status = STARTED
        thisExp.addData('main_feedback.started', main_feedback.tStart)
        main_feedback.maxDuration = 3
        # skip Routine main_feedback if its 'Skip if' condition is True
        main_feedback.skipped = continueRoutine and not (not showFeedback)
        continueRoutine = main_feedback.skipped
        # keep track of which components have finished
        main_feedbackComponents = main_feedback.components
        for thisComponent in main_feedback.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "main_feedback" ---
        thisExp.currentRoutine = main_feedback
        main_feedback.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine:
            # if trial has changed, end Routine now
            if hasattr(thisMain_loop, 'status') and thisMain_loop.status == STOPPING:
                continueRoutine = False
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            # is it time to end the Routine? (based on local clock)
            if tThisFlip > main_feedback.maxDuration-frameTolerance:
                main_feedback.maxDurationReached = True
                continueRoutine = False
            
            # *bg_feedback_main* updates
            
            # if bg_feedback_main is starting this frame...
            if bg_feedback_main.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                bg_feedback_main.frameNStart = frameN  # exact frame index
                bg_feedback_main.tStart = t  # local t and not account for scr refresh
                bg_feedback_main.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(bg_feedback_main, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'bg_feedback_main.started')
                # update status
                bg_feedback_main.status = STARTED
                bg_feedback_main.setAutoDraw(True)
            
            # if bg_feedback_main is active this frame...
            if bg_feedback_main.status == STARTED:
                # update params
                pass
            
            # *btn_feedback_main* updates
            
            # if btn_feedback_main is starting this frame...
            if btn_feedback_main.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                btn_feedback_main.frameNStart = frameN  # exact frame index
                btn_feedback_main.tStart = t  # local t and not account for scr refresh
                btn_feedback_main.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(btn_feedback_main, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'btn_feedback_main.started')
                # update status
                btn_feedback_main.status = STARTED
                btn_feedback_main.setAutoDraw(True)
            
            # if btn_feedback_main is active this frame...
            if btn_feedback_main.status == STARTED:
                # update params
                pass
            # *main_feedback_mouse* updates
            
            # if main_feedback_mouse is starting this frame...
            if main_feedback_mouse.status == NOT_STARTED and t >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                main_feedback_mouse.frameNStart = frameN  # exact frame index
                main_feedback_mouse.tStart = t  # local t and not account for scr refresh
                main_feedback_mouse.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(main_feedback_mouse, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.addData('main_feedback_mouse.started', t)
                # update status
                main_feedback_mouse.status = STARTED
                main_feedback_mouse.mouseClock.reset()
                prevButtonState = main_feedback_mouse.getPressed()  # if button is down already this ISN'T a new click
            if main_feedback_mouse.status == STARTED:  # only update if started and not finished!
                buttons = main_feedback_mouse.getPressed()
                if buttons != prevButtonState:  # button state changed?
                    prevButtonState = buttons
                    if sum(buttons) > 0:  # state changed to a new click
                        # check if the mouse was inside our 'clickable' objects
                        gotValidClick = False
                        clickableList = environmenttools.getFromNames(btn_feedback_main, namespace=locals())
                        for obj in clickableList:
                            # is this object clicked on?
                            if obj.contains(main_feedback_mouse):
                                gotValidClick = True
                                main_feedback_mouse.clicked_name.append(obj.name)
                        if not gotValidClick:
                            main_feedback_mouse.clicked_name.append(None)
                        x, y = main_feedback_mouse.getPos()
                        main_feedback_mouse.x.append(float(x))
                        main_feedback_mouse.y.append(float(y))
                        buttons = main_feedback_mouse.getPressed()
                        main_feedback_mouse.leftButton.append(buttons[0])
                        main_feedback_mouse.midButton.append(buttons[1])
                        main_feedback_mouse.rightButton.append(buttons[2])
                        main_feedback_mouse.time.append(main_feedback_mouse.mouseClock.getTime())
                        if gotValidClick:
                            continueRoutine = False  # end routine on response
            
            # *feedback_concept_main* updates
            
            # if feedback_concept_main is starting this frame...
            if feedback_concept_main.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                feedback_concept_main.frameNStart = frameN  # exact frame index
                feedback_concept_main.tStart = t  # local t and not account for scr refresh
                feedback_concept_main.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(feedback_concept_main, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'feedback_concept_main.started')
                # update status
                feedback_concept_main.status = STARTED
                feedback_concept_main.setAutoDraw(True)
            
            # if feedback_concept_main is active this frame...
            if feedback_concept_main.status == STARTED:
                # update params
                pass
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer, globalClock], 
                    currentRoutine=main_feedback,
                )
                # skip the frame we paused on
                continue
            
            # has a Component requested the Routine to end?
            if not continueRoutine:
                main_feedback.forceEnded = routineForceEnded = True
            # has the Routine been forcibly ended?
            if main_feedback.forceEnded or routineForceEnded:
                break
            # has every Component finished?
            continueRoutine = False
            for thisComponent in main_feedback.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "main_feedback" ---
        for thisComponent in main_feedback.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for main_feedback
        main_feedback.tStop = globalClock.getTime(format='float')
        main_feedback.tStopRefresh = tThisFlipGlobal
        thisExp.addData('main_feedback.stopped', main_feedback.tStop)
        # store data for main_loop (TrialHandler)
        main_loop.addData('main_feedback_mouse.x', main_feedback_mouse.x)
        main_loop.addData('main_feedback_mouse.y', main_feedback_mouse.y)
        main_loop.addData('main_feedback_mouse.leftButton', main_feedback_mouse.leftButton)
        main_loop.addData('main_feedback_mouse.midButton', main_feedback_mouse.midButton)
        main_loop.addData('main_feedback_mouse.rightButton', main_feedback_mouse.rightButton)
        main_loop.addData('main_feedback_mouse.time', main_feedback_mouse.time)
        main_loop.addData('main_feedback_mouse.clicked_name', main_feedback_mouse.clicked_name)
        # the Routine "main_feedback" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        # mark thisMain_loop as finished
        if hasattr(thisMain_loop, 'status'):
            thisMain_loop.status = FINISHED
        # if awaiting a pause, pause now
        if main_loop.status == PAUSED:
            thisExp.status = PAUSED
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[globalClock], 
            )
            # once done pausing, restore running status
            main_loop.status = STARTED
        thisExp.nextEntry()
        
    # completed 1.0 repeats of 'main_loop'
    main_loop.status = FINISHED
    
    if thisSession is not None:
        # if running in a Session with a Liaison client, send data up to now
        thisSession.sendExperimentData()
    
    # --- Prepare to start Routine "end" ---
    # create an object to store info about Routine end
    end = data.Routine(
        name='end',
        components=[bg_goodbye_img],
    )
    end.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # store start times for end
    end.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    end.tStart = globalClock.getTime(format='float')
    end.status = STARTED
    thisExp.addData('end.started', end.tStart)
    end.maxDuration = 3.0
    # keep track of which components have finished
    endComponents = end.components
    for thisComponent in end.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "end" ---
    thisExp.currentRoutine = end
    end.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        # is it time to end the Routine? (based on local clock)
        if tThisFlip > end.maxDuration-frameTolerance:
            end.maxDurationReached = True
            continueRoutine = False
        
        # *bg_goodbye_img* updates
        
        # if bg_goodbye_img is starting this frame...
        if bg_goodbye_img.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            bg_goodbye_img.frameNStart = frameN  # exact frame index
            bg_goodbye_img.tStart = t  # local t and not account for scr refresh
            bg_goodbye_img.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(bg_goodbye_img, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'bg_goodbye_img.started')
            # update status
            bg_goodbye_img.status = STARTED
            bg_goodbye_img.setAutoDraw(True)
        
        # if bg_goodbye_img is active this frame...
        if bg_goodbye_img.status == STARTED:
            # update params
            pass
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer, globalClock], 
                currentRoutine=end,
            )
            # skip the frame we paused on
            continue
        
        # has a Component requested the Routine to end?
        if not continueRoutine:
            end.forceEnded = routineForceEnded = True
        # has the Routine been forcibly ended?
        if end.forceEnded or routineForceEnded:
            break
        # has every Component finished?
        continueRoutine = False
        for thisComponent in end.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "end" ---
    for thisComponent in end.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for end
    end.tStop = globalClock.getTime(format='float')
    end.tStopRefresh = tThisFlipGlobal
    thisExp.addData('end.stopped', end.tStop)
    thisExp.nextEntry()
    # the Routine "end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # mark experiment as finished
    endExperiment(thisExp, win=win)


def saveData(thisExp):
    """
    Save data from this experiment
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    """
    filename = thisExp.dataFileName
    # these shouldn't be strictly necessary (should auto-save)
    thisExp.saveAsWideText(filename + '.csv', delim='auto')
    thisExp.saveAsPickle(filename)


def endExperiment(thisExp, win=None):
    """
    End this experiment, performing final shut down operations.
    
    This function does NOT close the window or end the Python process - use `quit` for this.
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window for this experiment.
    """
    if win is not None:
        # remove autodraw from all current components
        win.clearAutoDraw()
        # Flip one final time so any remaining win.callOnFlip() 
        # and win.timeOnFlip() tasks get executed
        win.flip()
    # return console logger level to WARNING
    logging.console.setLevel(logging.WARNING)
    # mark experiment handler as finished
    thisExp.status = FINISHED
    # run any 'at exit' functions
    for fcn in runAtExit:
        fcn()
    logging.flush()


def quit(thisExp, win=None, thisSession=None):
    """
    Fully quit, closing the window and ending the Python process.
    
    Parameters
    ==========
    win : psychopy.visual.Window
        Window to close.
    thisSession : psychopy.session.Session or None
        Handle of the Session object this experiment is being run from, if any.
    """
    thisExp.abort()  # or data files will save again on exit
    # make sure everything is closed down
    if win is not None:
        # Flip one final time so any remaining win.callOnFlip() 
        # and win.timeOnFlip() tasks get executed before quitting
        win.flip()
        win.close()
    logging.flush()
    if thisSession is not None:
        thisSession.stop()
    # terminate Python process
    core.quit()


# if running this experiment as a script...
if __name__ == '__main__':
    # call all functions in order
    expInfo = showExpInfoDlg(expInfo=expInfo)
    thisExp = setupData(expInfo=expInfo)
    logFile = setupLogging(filename=thisExp.dataFileName)
    win = setupWindow(expInfo=expInfo)
    setupDevices(expInfo=expInfo, thisExp=thisExp, win=win)
    run(
        expInfo=expInfo, 
        thisExp=thisExp, 
        win=win,
        globalClock='float'
    )
    saveData(thisExp=thisExp)
    quit(thisExp=thisExp, win=win)
