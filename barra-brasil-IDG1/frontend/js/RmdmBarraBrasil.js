/**
 * 
 */

var barra_brasil_element = jQuery(RmdmBarraBrasil.element_to_prepend);

/** 
 * Hack for Rmdm-divi theme
 */
if(jQuery('#main-header').length > 0 && (RmdmBarraBrasil.element_to_prepend == 'BODY' || RmdmBarraBrasil.element_to_prepend == 'body' ))
{
	barra_brasil_element = jQuery('#main-header');
}

barra_brasil_element.prepend('<div id="barra-brasil" style="background:#7F7F7F; height: 20px; padding:0 0 0 10px;display:block;"><ul id="menu-barra-temp" style="list-style:none;"><li style="display:inline; float:left;padding-right:10px; margin-right:10px; border-right:1px solid #EDEDED"><a href="http://brasil.gov.br" style="font-family:sans,sans-serif; text-decoration:none; color:white;">Portal do Governo Brasileiro</a></li><li><a style="font-family:sans,sans-serif; text-decoration:none; color:white;" href="http://epwg.governoeletronico.gov.br/barra/atualize.html">Atualize sua Barra de Governo</a></li></ul></div>');