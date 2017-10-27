Mettl XBlock
============

The package provides an XBlock for use with the edX platform which provides students to give the test hosted at `Mettl <http://www.mettl.com>`_. Instructors are then able to see and download the report of each student.

Installation
------------
    ::

     $ sudo -H -u edxapp bash
     $ source ~/edxapp_env
     $ pip install git+https://github.com/Mettl/mettl.git

#. After successful installation, Run following command to set your API keys,

    ::

     $ sudo -H -u edxapp bash
     $ source ~/edxapp_env
     $ mettl_auth_keys

    You will be prompted for Public Key and Private Key

    ::

        edxapp@precise64:~/edx-platform$ Please enter your Public Key :        
        edxapp@precise64:~/edx-platform$ Please enter your Private Key :

    You can also change your API keys using the same command.

#. Enable the block.

  #.  In ``edx-platform/lms/envs/common.py``, uncomment (if not already)::
    
        # from xmodule.x_module import prefer_xmodules
        # XBLOCK_SELECT_FUNCTION = prefer_xmodules
    
  #.  In ``edx-platform/cms/envs/common.py``, uncomment::
    
        # from xmodule.x_module import prefer_xmodules
        # XBLOCK_SELECT_FUNCTION = prefer_xmodules    

Usage
-----

1. Change Advanced Settings

  #. Open a course you are authoring and select "Settings" ⇒ "Advanced Settings
  #. Navigate to the section titled "Advanced Module List"
  #. Add "mettl" to module list.
  #. A studio should save your changes automatically.

  IMAGE

2. Create a Mettl XBlock

 #. Return to the Course Outline
 #. Create a Section, Sub-section, and Unit, if you haven't already
 #. In the "Add New Component" interface, you should now see an "Advanced" button
 #. Click "Advanced" and choose "Mettl XBlock"

 IMAGE
  
3. Initially, the XBlock will look like below,
  
  IMAGE

4. Settings

+-------------------------------+--------------------------------------------------------------------------+
| Assessment ID                 | Defines the assessment for which students have to give test              |
+-------------------------------+--------------------------------------------------------------------------+
| Display Name                  | The name appears in the horizontal navigation at the top of the page     |
+-------------------------------+--------------------------------------------------------------------------+
| Weight                        | Defines the number of points each problem is worth.                      |
+-------------------------------+--------------------------------------------------------------------------+
| Test Button Label             | Defines the label for the test button                                    |
+-------------------------------+--------------------------------------------------------------------------+
| Test Button Background Color  | Defines the background color of the test button                          |
+-------------------------------+--------------------------------------------------------------------------+
| Test Button Text Color        | Defines the text color of the test button                                |
+-------------------------------+--------------------------------------------------------------------------+

  IMAGE

5. Grading Policy

  Mettl XBlocks inherit grading settings just like any other problem type. You can include them in homework, exams or any assignment type of your choosing. 

6. After settings all, XBlock will look like below,

  IMAGE

About Mettl
-----------

Mettl provides advanced proctoring, **Mettl Advanced Proctoring** is a step up from our current Web and Image proctoring features. For those who aren’t familiar with our Web and Image proctoring – Web Proctor Feature defines a top limit for the number of times the candidate can navigate away from their test screen and also pops a warning or terminates the test depending on the admin set limit. Image Proctor feature activates the candidate’s webcam and takes random shots of the candidate in the duration of the test – these get appended in the automatically generated report. With the introduction of the Advanced Web and Advanced Image Proctoring Features, the test admin will be able to do all of the above AND get the live feed on the candidate’s progress on the test, live – With webcam feed in case of Advanced Image Proctoring and an image free, candidate-wise test progress. With the Advanced Proctor feature, the test admin can see all the candidates in a grid view on the dashboard (See image below) and do all of the following:

 - Can watch the live feed of the candidate
 - Get live images of candidates updates every few seconds
 - Chat with the candidate
 - Make announcements
 - See automatically generated red flags (Flagged by our SW depending on any suspicious behavior)
 - Pull up live feed of any candidate with history at any stage in the test
 - Terminate any test from the dashboard
 - View the candidate’s screen – live!
