<?php
/**
 * passwordgenerator Plugin
 *
 * @license    GPL 2 (http://www.gnu.org/licenses/gpl.html)
 * @author     An-Dir <1.c-j@gmx.de>
 */

if(!defined('DOKU_INC')) die();
if(!defined('DOKU_PLUGIN')) define('DOKU_PLUGIN',DOKU_INC.'lib/plugins/');

require_once(DOKU_PLUGIN.'action.php');

class action_plugin_passwordgenerator extends DokuWiki_Action_Plugin {
function register(Doku_Event_Handler $controller) {
    $controller->register_hook('DOKUWIKI_STARTED', 'AFTER',  $this, '_addpluginconfigdata');
}
function _addpluginconfigdata(&$event, $param) {
    global $JSINFO;
    $JSINFO['plugin_passwordgenerator_charset1'] = $this->getConf('charset1');
    $JSINFO['plugin_passwordgenerator_charset2'] = $this->getConf('charset2');
    $JSINFO['plugin_passwordgenerator_charset3'] = $this->getConf('charset3');
    $JSINFO['plugin_passwordgenerator_charset4'] = $this->getConf('charset4');
    $JSINFO['plugin_passwordgenerator_generator1Length'] = $this->getConf('generator1Length');
    $JSINFO['plugin_passwordgenerator_removeSelection'] = $this->getConf('removeSelection');
}
}
