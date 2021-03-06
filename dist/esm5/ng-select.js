import { __spread, __values, __read } from 'tslib';
import { Directive, TemplateRef, ChangeDetectionStrategy, Component, ElementRef, Input, Injectable, Renderer2, EventEmitter, Output, ViewChild, NgZone, forwardRef, Inject, ViewEncapsulation, ChangeDetectorRef, ContentChild, HostListener, HostBinding, ContentChildren, InjectionToken, NgModule } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { merge } from 'rxjs/observable/merge';
import { takeUntil, startWith } from 'rxjs/operators';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';

var NgOptionTemplateDirective = /** @class */ (function () {
    function NgOptionTemplateDirective(template) {
        this.template = template;
    }
    return NgOptionTemplateDirective;
}());
NgOptionTemplateDirective.decorators = [
    { type: Directive, args: [{ selector: '[ng-option-tmp]' },] },
];
NgOptionTemplateDirective.ctorParameters = function () { return [
    { type: TemplateRef }
]; };
var NgOptgroupTemplateDirective = /** @class */ (function () {
    function NgOptgroupTemplateDirective(template) {
        this.template = template;
    }
    return NgOptgroupTemplateDirective;
}());
NgOptgroupTemplateDirective.decorators = [
    { type: Directive, args: [{ selector: '[ng-optgroup-tmp]' },] },
];
NgOptgroupTemplateDirective.ctorParameters = function () { return [
    { type: TemplateRef }
]; };
var NgLabelTemplateDirective = /** @class */ (function () {
    function NgLabelTemplateDirective(template) {
        this.template = template;
    }
    return NgLabelTemplateDirective;
}());
NgLabelTemplateDirective.decorators = [
    { type: Directive, args: [{ selector: '[ng-label-tmp]' },] },
];
NgLabelTemplateDirective.ctorParameters = function () { return [
    { type: TemplateRef }
]; };
var NgMultiLabelTemplateDirective = /** @class */ (function () {
    function NgMultiLabelTemplateDirective(template) {
        this.template = template;
    }
    return NgMultiLabelTemplateDirective;
}());
NgMultiLabelTemplateDirective.decorators = [
    { type: Directive, args: [{ selector: '[ng-multi-label-tmp]' },] },
];
NgMultiLabelTemplateDirective.ctorParameters = function () { return [
    { type: TemplateRef }
]; };
var NgHeaderTemplateDirective = /** @class */ (function () {
    function NgHeaderTemplateDirective(template) {
        this.template = template;
    }
    return NgHeaderTemplateDirective;
}());
NgHeaderTemplateDirective.decorators = [
    { type: Directive, args: [{ selector: '[ng-header-tmp]' },] },
];
NgHeaderTemplateDirective.ctorParameters = function () { return [
    { type: TemplateRef }
]; };
var NgFooterTemplateDirective = /** @class */ (function () {
    function NgFooterTemplateDirective(template) {
        this.template = template;
    }
    return NgFooterTemplateDirective;
}());
NgFooterTemplateDirective.decorators = [
    { type: Directive, args: [{ selector: '[ng-footer-tmp]' },] },
];
NgFooterTemplateDirective.ctorParameters = function () { return [
    { type: TemplateRef }
]; };
var NgNotFoundTemplateDirective = /** @class */ (function () {
    function NgNotFoundTemplateDirective(template) {
        this.template = template;
    }
    return NgNotFoundTemplateDirective;
}());
NgNotFoundTemplateDirective.decorators = [
    { type: Directive, args: [{ selector: '[ng-notfound-tmp]' },] },
];
NgNotFoundTemplateDirective.ctorParameters = function () { return [
    { type: TemplateRef }
]; };
var NgTypeToSearchTemplateDirective = /** @class */ (function () {
    function NgTypeToSearchTemplateDirective(template) {
        this.template = template;
    }
    return NgTypeToSearchTemplateDirective;
}());
NgTypeToSearchTemplateDirective.decorators = [
    { type: Directive, args: [{ selector: '[ng-typetosearch-tmp]' },] },
];
NgTypeToSearchTemplateDirective.ctorParameters = function () { return [
    { type: TemplateRef }
]; };
var NgLoadingTextTemplateDirective = /** @class */ (function () {
    function NgLoadingTextTemplateDirective(template) {
        this.template = template;
    }
    return NgLoadingTextTemplateDirective;
}());
NgLoadingTextTemplateDirective.decorators = [
    { type: Directive, args: [{ selector: '[ng-loadingtext-tmp]' },] },
];
NgLoadingTextTemplateDirective.ctorParameters = function () { return [
    { type: TemplateRef }
]; };
var KeyCode = {
    Tab: 9,
    Enter: 13,
    Esc: 27,
    Space: 32,
    ArrowUp: 38,
    ArrowDown: 40,
    Backspace: 8,
};
KeyCode[KeyCode.Tab] = 'Tab';
KeyCode[KeyCode.Enter] = 'Enter';
KeyCode[KeyCode.Esc] = 'Esc';
KeyCode[KeyCode.Space] = 'Space';
KeyCode[KeyCode.ArrowUp] = 'ArrowUp';
KeyCode[KeyCode.ArrowDown] = 'ArrowDown';
KeyCode[KeyCode.Backspace] = 'Backspace';
var diacritics = {
    '\u24B6': 'A',
    '\uFF21': 'A',
    '\u00C0': 'A',
    '\u00C1': 'A',
    '\u00C2': 'A',
    '\u1EA6': 'A',
    '\u1EA4': 'A',
    '\u1EAA': 'A',
    '\u1EA8': 'A',
    '\u00C3': 'A',
    '\u0100': 'A',
    '\u0102': 'A',
    '\u1EB0': 'A',
    '\u1EAE': 'A',
    '\u1EB4': 'A',
    '\u1EB2': 'A',
    '\u0226': 'A',
    '\u01E0': 'A',
    '\u00C4': 'A',
    '\u01DE': 'A',
    '\u1EA2': 'A',
    '\u00C5': 'A',
    '\u01FA': 'A',
    '\u01CD': 'A',
    '\u0200': 'A',
    '\u0202': 'A',
    '\u1EA0': 'A',
    '\u1EAC': 'A',
    '\u1EB6': 'A',
    '\u1E00': 'A',
    '\u0104': 'A',
    '\u023A': 'A',
    '\u2C6F': 'A',
    '\uA732': 'AA',
    '\u00C6': 'AE',
    '\u01FC': 'AE',
    '\u01E2': 'AE',
    '\uA734': 'AO',
    '\uA736': 'AU',
    '\uA738': 'AV',
    '\uA73A': 'AV',
    '\uA73C': 'AY',
    '\u24B7': 'B',
    '\uFF22': 'B',
    '\u1E02': 'B',
    '\u1E04': 'B',
    '\u1E06': 'B',
    '\u0243': 'B',
    '\u0182': 'B',
    '\u0181': 'B',
    '\u24B8': 'C',
    '\uFF23': 'C',
    '\u0106': 'C',
    '\u0108': 'C',
    '\u010A': 'C',
    '\u010C': 'C',
    '\u00C7': 'C',
    '\u1E08': 'C',
    '\u0187': 'C',
    '\u023B': 'C',
    '\uA73E': 'C',
    '\u24B9': 'D',
    '\uFF24': 'D',
    '\u1E0A': 'D',
    '\u010E': 'D',
    '\u1E0C': 'D',
    '\u1E10': 'D',
    '\u1E12': 'D',
    '\u1E0E': 'D',
    '\u0110': 'D',
    '\u018B': 'D',
    '\u018A': 'D',
    '\u0189': 'D',
    '\uA779': 'D',
    '\u01F1': 'DZ',
    '\u01C4': 'DZ',
    '\u01F2': 'Dz',
    '\u01C5': 'Dz',
    '\u24BA': 'E',
    '\uFF25': 'E',
    '\u00C8': 'E',
    '\u00C9': 'E',
    '\u00CA': 'E',
    '\u1EC0': 'E',
    '\u1EBE': 'E',
    '\u1EC4': 'E',
    '\u1EC2': 'E',
    '\u1EBC': 'E',
    '\u0112': 'E',
    '\u1E14': 'E',
    '\u1E16': 'E',
    '\u0114': 'E',
    '\u0116': 'E',
    '\u00CB': 'E',
    '\u1EBA': 'E',
    '\u011A': 'E',
    '\u0204': 'E',
    '\u0206': 'E',
    '\u1EB8': 'E',
    '\u1EC6': 'E',
    '\u0228': 'E',
    '\u1E1C': 'E',
    '\u0118': 'E',
    '\u1E18': 'E',
    '\u1E1A': 'E',
    '\u0190': 'E',
    '\u018E': 'E',
    '\u24BB': 'F',
    '\uFF26': 'F',
    '\u1E1E': 'F',
    '\u0191': 'F',
    '\uA77B': 'F',
    '\u24BC': 'G',
    '\uFF27': 'G',
    '\u01F4': 'G',
    '\u011C': 'G',
    '\u1E20': 'G',
    '\u011E': 'G',
    '\u0120': 'G',
    '\u01E6': 'G',
    '\u0122': 'G',
    '\u01E4': 'G',
    '\u0193': 'G',
    '\uA7A0': 'G',
    '\uA77D': 'G',
    '\uA77E': 'G',
    '\u24BD': 'H',
    '\uFF28': 'H',
    '\u0124': 'H',
    '\u1E22': 'H',
    '\u1E26': 'H',
    '\u021E': 'H',
    '\u1E24': 'H',
    '\u1E28': 'H',
    '\u1E2A': 'H',
    '\u0126': 'H',
    '\u2C67': 'H',
    '\u2C75': 'H',
    '\uA78D': 'H',
    '\u24BE': 'I',
    '\uFF29': 'I',
    '\u00CC': 'I',
    '\u00CD': 'I',
    '\u00CE': 'I',
    '\u0128': 'I',
    '\u012A': 'I',
    '\u012C': 'I',
    '\u0130': 'I',
    '\u00CF': 'I',
    '\u1E2E': 'I',
    '\u1EC8': 'I',
    '\u01CF': 'I',
    '\u0208': 'I',
    '\u020A': 'I',
    '\u1ECA': 'I',
    '\u012E': 'I',
    '\u1E2C': 'I',
    '\u0197': 'I',
    '\u24BF': 'J',
    '\uFF2A': 'J',
    '\u0134': 'J',
    '\u0248': 'J',
    '\u24C0': 'K',
    '\uFF2B': 'K',
    '\u1E30': 'K',
    '\u01E8': 'K',
    '\u1E32': 'K',
    '\u0136': 'K',
    '\u1E34': 'K',
    '\u0198': 'K',
    '\u2C69': 'K',
    '\uA740': 'K',
    '\uA742': 'K',
    '\uA744': 'K',
    '\uA7A2': 'K',
    '\u24C1': 'L',
    '\uFF2C': 'L',
    '\u013F': 'L',
    '\u0139': 'L',
    '\u013D': 'L',
    '\u1E36': 'L',
    '\u1E38': 'L',
    '\u013B': 'L',
    '\u1E3C': 'L',
    '\u1E3A': 'L',
    '\u0141': 'L',
    '\u023D': 'L',
    '\u2C62': 'L',
    '\u2C60': 'L',
    '\uA748': 'L',
    '\uA746': 'L',
    '\uA780': 'L',
    '\u01C7': 'LJ',
    '\u01C8': 'Lj',
    '\u24C2': 'M',
    '\uFF2D': 'M',
    '\u1E3E': 'M',
    '\u1E40': 'M',
    '\u1E42': 'M',
    '\u2C6E': 'M',
    '\u019C': 'M',
    '\u24C3': 'N',
    '\uFF2E': 'N',
    '\u01F8': 'N',
    '\u0143': 'N',
    '\u00D1': 'N',
    '\u1E44': 'N',
    '\u0147': 'N',
    '\u1E46': 'N',
    '\u0145': 'N',
    '\u1E4A': 'N',
    '\u1E48': 'N',
    '\u0220': 'N',
    '\u019D': 'N',
    '\uA790': 'N',
    '\uA7A4': 'N',
    '\u01CA': 'NJ',
    '\u01CB': 'Nj',
    '\u24C4': 'O',
    '\uFF2F': 'O',
    '\u00D2': 'O',
    '\u00D3': 'O',
    '\u00D4': 'O',
    '\u1ED2': 'O',
    '\u1ED0': 'O',
    '\u1ED6': 'O',
    '\u1ED4': 'O',
    '\u00D5': 'O',
    '\u1E4C': 'O',
    '\u022C': 'O',
    '\u1E4E': 'O',
    '\u014C': 'O',
    '\u1E50': 'O',
    '\u1E52': 'O',
    '\u014E': 'O',
    '\u022E': 'O',
    '\u0230': 'O',
    '\u00D6': 'O',
    '\u022A': 'O',
    '\u1ECE': 'O',
    '\u0150': 'O',
    '\u01D1': 'O',
    '\u020C': 'O',
    '\u020E': 'O',
    '\u01A0': 'O',
    '\u1EDC': 'O',
    '\u1EDA': 'O',
    '\u1EE0': 'O',
    '\u1EDE': 'O',
    '\u1EE2': 'O',
    '\u1ECC': 'O',
    '\u1ED8': 'O',
    '\u01EA': 'O',
    '\u01EC': 'O',
    '\u00D8': 'O',
    '\u01FE': 'O',
    '\u0186': 'O',
    '\u019F': 'O',
    '\uA74A': 'O',
    '\uA74C': 'O',
    '\u01A2': 'OI',
    '\uA74E': 'OO',
    '\u0222': 'OU',
    '\u24C5': 'P',
    '\uFF30': 'P',
    '\u1E54': 'P',
    '\u1E56': 'P',
    '\u01A4': 'P',
    '\u2C63': 'P',
    '\uA750': 'P',
    '\uA752': 'P',
    '\uA754': 'P',
    '\u24C6': 'Q',
    '\uFF31': 'Q',
    '\uA756': 'Q',
    '\uA758': 'Q',
    '\u024A': 'Q',
    '\u24C7': 'R',
    '\uFF32': 'R',
    '\u0154': 'R',
    '\u1E58': 'R',
    '\u0158': 'R',
    '\u0210': 'R',
    '\u0212': 'R',
    '\u1E5A': 'R',
    '\u1E5C': 'R',
    '\u0156': 'R',
    '\u1E5E': 'R',
    '\u024C': 'R',
    '\u2C64': 'R',
    '\uA75A': 'R',
    '\uA7A6': 'R',
    '\uA782': 'R',
    '\u24C8': 'S',
    '\uFF33': 'S',
    '\u1E9E': 'S',
    '\u015A': 'S',
    '\u1E64': 'S',
    '\u015C': 'S',
    '\u1E60': 'S',
    '\u0160': 'S',
    '\u1E66': 'S',
    '\u1E62': 'S',
    '\u1E68': 'S',
    '\u0218': 'S',
    '\u015E': 'S',
    '\u2C7E': 'S',
    '\uA7A8': 'S',
    '\uA784': 'S',
    '\u24C9': 'T',
    '\uFF34': 'T',
    '\u1E6A': 'T',
    '\u0164': 'T',
    '\u1E6C': 'T',
    '\u021A': 'T',
    '\u0162': 'T',
    '\u1E70': 'T',
    '\u1E6E': 'T',
    '\u0166': 'T',
    '\u01AC': 'T',
    '\u01AE': 'T',
    '\u023E': 'T',
    '\uA786': 'T',
    '\uA728': 'TZ',
    '\u24CA': 'U',
    '\uFF35': 'U',
    '\u00D9': 'U',
    '\u00DA': 'U',
    '\u00DB': 'U',
    '\u0168': 'U',
    '\u1E78': 'U',
    '\u016A': 'U',
    '\u1E7A': 'U',
    '\u016C': 'U',
    '\u00DC': 'U',
    '\u01DB': 'U',
    '\u01D7': 'U',
    '\u01D5': 'U',
    '\u01D9': 'U',
    '\u1EE6': 'U',
    '\u016E': 'U',
    '\u0170': 'U',
    '\u01D3': 'U',
    '\u0214': 'U',
    '\u0216': 'U',
    '\u01AF': 'U',
    '\u1EEA': 'U',
    '\u1EE8': 'U',
    '\u1EEE': 'U',
    '\u1EEC': 'U',
    '\u1EF0': 'U',
    '\u1EE4': 'U',
    '\u1E72': 'U',
    '\u0172': 'U',
    '\u1E76': 'U',
    '\u1E74': 'U',
    '\u0244': 'U',
    '\u24CB': 'V',
    '\uFF36': 'V',
    '\u1E7C': 'V',
    '\u1E7E': 'V',
    '\u01B2': 'V',
    '\uA75E': 'V',
    '\u0245': 'V',
    '\uA760': 'VY',
    '\u24CC': 'W',
    '\uFF37': 'W',
    '\u1E80': 'W',
    '\u1E82': 'W',
    '\u0174': 'W',
    '\u1E86': 'W',
    '\u1E84': 'W',
    '\u1E88': 'W',
    '\u2C72': 'W',
    '\u24CD': 'X',
    '\uFF38': 'X',
    '\u1E8A': 'X',
    '\u1E8C': 'X',
    '\u24CE': 'Y',
    '\uFF39': 'Y',
    '\u1EF2': 'Y',
    '\u00DD': 'Y',
    '\u0176': 'Y',
    '\u1EF8': 'Y',
    '\u0232': 'Y',
    '\u1E8E': 'Y',
    '\u0178': 'Y',
    '\u1EF6': 'Y',
    '\u1EF4': 'Y',
    '\u01B3': 'Y',
    '\u024E': 'Y',
    '\u1EFE': 'Y',
    '\u24CF': 'Z',
    '\uFF3A': 'Z',
    '\u0179': 'Z',
    '\u1E90': 'Z',
    '\u017B': 'Z',
    '\u017D': 'Z',
    '\u1E92': 'Z',
    '\u1E94': 'Z',
    '\u01B5': 'Z',
    '\u0224': 'Z',
    '\u2C7F': 'Z',
    '\u2C6B': 'Z',
    '\uA762': 'Z',
    '\u24D0': 'a',
    '\uFF41': 'a',
    '\u1E9A': 'a',
    '\u00E0': 'a',
    '\u00E1': 'a',
    '\u00E2': 'a',
    '\u1EA7': 'a',
    '\u1EA5': 'a',
    '\u1EAB': 'a',
    '\u1EA9': 'a',
    '\u00E3': 'a',
    '\u0101': 'a',
    '\u0103': 'a',
    '\u1EB1': 'a',
    '\u1EAF': 'a',
    '\u1EB5': 'a',
    '\u1EB3': 'a',
    '\u0227': 'a',
    '\u01E1': 'a',
    '\u00E4': 'a',
    '\u01DF': 'a',
    '\u1EA3': 'a',
    '\u00E5': 'a',
    '\u01FB': 'a',
    '\u01CE': 'a',
    '\u0201': 'a',
    '\u0203': 'a',
    '\u1EA1': 'a',
    '\u1EAD': 'a',
    '\u1EB7': 'a',
    '\u1E01': 'a',
    '\u0105': 'a',
    '\u2C65': 'a',
    '\u0250': 'a',
    '\uA733': 'aa',
    '\u00E6': 'ae',
    '\u01FD': 'ae',
    '\u01E3': 'ae',
    '\uA735': 'ao',
    '\uA737': 'au',
    '\uA739': 'av',
    '\uA73B': 'av',
    '\uA73D': 'ay',
    '\u24D1': 'b',
    '\uFF42': 'b',
    '\u1E03': 'b',
    '\u1E05': 'b',
    '\u1E07': 'b',
    '\u0180': 'b',
    '\u0183': 'b',
    '\u0253': 'b',
    '\u24D2': 'c',
    '\uFF43': 'c',
    '\u0107': 'c',
    '\u0109': 'c',
    '\u010B': 'c',
    '\u010D': 'c',
    '\u00E7': 'c',
    '\u1E09': 'c',
    '\u0188': 'c',
    '\u023C': 'c',
    '\uA73F': 'c',
    '\u2184': 'c',
    '\u24D3': 'd',
    '\uFF44': 'd',
    '\u1E0B': 'd',
    '\u010F': 'd',
    '\u1E0D': 'd',
    '\u1E11': 'd',
    '\u1E13': 'd',
    '\u1E0F': 'd',
    '\u0111': 'd',
    '\u018C': 'd',
    '\u0256': 'd',
    '\u0257': 'd',
    '\uA77A': 'd',
    '\u01F3': 'dz',
    '\u01C6': 'dz',
    '\u24D4': 'e',
    '\uFF45': 'e',
    '\u00E8': 'e',
    '\u00E9': 'e',
    '\u00EA': 'e',
    '\u1EC1': 'e',
    '\u1EBF': 'e',
    '\u1EC5': 'e',
    '\u1EC3': 'e',
    '\u1EBD': 'e',
    '\u0113': 'e',
    '\u1E15': 'e',
    '\u1E17': 'e',
    '\u0115': 'e',
    '\u0117': 'e',
    '\u00EB': 'e',
    '\u1EBB': 'e',
    '\u011B': 'e',
    '\u0205': 'e',
    '\u0207': 'e',
    '\u1EB9': 'e',
    '\u1EC7': 'e',
    '\u0229': 'e',
    '\u1E1D': 'e',
    '\u0119': 'e',
    '\u1E19': 'e',
    '\u1E1B': 'e',
    '\u0247': 'e',
    '\u025B': 'e',
    '\u01DD': 'e',
    '\u24D5': 'f',
    '\uFF46': 'f',
    '\u1E1F': 'f',
    '\u0192': 'f',
    '\uA77C': 'f',
    '\u24D6': 'g',
    '\uFF47': 'g',
    '\u01F5': 'g',
    '\u011D': 'g',
    '\u1E21': 'g',
    '\u011F': 'g',
    '\u0121': 'g',
    '\u01E7': 'g',
    '\u0123': 'g',
    '\u01E5': 'g',
    '\u0260': 'g',
    '\uA7A1': 'g',
    '\u1D79': 'g',
    '\uA77F': 'g',
    '\u24D7': 'h',
    '\uFF48': 'h',
    '\u0125': 'h',
    '\u1E23': 'h',
    '\u1E27': 'h',
    '\u021F': 'h',
    '\u1E25': 'h',
    '\u1E29': 'h',
    '\u1E2B': 'h',
    '\u1E96': 'h',
    '\u0127': 'h',
    '\u2C68': 'h',
    '\u2C76': 'h',
    '\u0265': 'h',
    '\u0195': 'hv',
    '\u24D8': 'i',
    '\uFF49': 'i',
    '\u00EC': 'i',
    '\u00ED': 'i',
    '\u00EE': 'i',
    '\u0129': 'i',
    '\u012B': 'i',
    '\u012D': 'i',
    '\u00EF': 'i',
    '\u1E2F': 'i',
    '\u1EC9': 'i',
    '\u01D0': 'i',
    '\u0209': 'i',
    '\u020B': 'i',
    '\u1ECB': 'i',
    '\u012F': 'i',
    '\u1E2D': 'i',
    '\u0268': 'i',
    '\u0131': 'i',
    '\u24D9': 'j',
    '\uFF4A': 'j',
    '\u0135': 'j',
    '\u01F0': 'j',
    '\u0249': 'j',
    '\u24DA': 'k',
    '\uFF4B': 'k',
    '\u1E31': 'k',
    '\u01E9': 'k',
    '\u1E33': 'k',
    '\u0137': 'k',
    '\u1E35': 'k',
    '\u0199': 'k',
    '\u2C6A': 'k',
    '\uA741': 'k',
    '\uA743': 'k',
    '\uA745': 'k',
    '\uA7A3': 'k',
    '\u24DB': 'l',
    '\uFF4C': 'l',
    '\u0140': 'l',
    '\u013A': 'l',
    '\u013E': 'l',
    '\u1E37': 'l',
    '\u1E39': 'l',
    '\u013C': 'l',
    '\u1E3D': 'l',
    '\u1E3B': 'l',
    '\u017F': 'l',
    '\u0142': 'l',
    '\u019A': 'l',
    '\u026B': 'l',
    '\u2C61': 'l',
    '\uA749': 'l',
    '\uA781': 'l',
    '\uA747': 'l',
    '\u01C9': 'lj',
    '\u24DC': 'm',
    '\uFF4D': 'm',
    '\u1E3F': 'm',
    '\u1E41': 'm',
    '\u1E43': 'm',
    '\u0271': 'm',
    '\u026F': 'm',
    '\u24DD': 'n',
    '\uFF4E': 'n',
    '\u01F9': 'n',
    '\u0144': 'n',
    '\u00F1': 'n',
    '\u1E45': 'n',
    '\u0148': 'n',
    '\u1E47': 'n',
    '\u0146': 'n',
    '\u1E4B': 'n',
    '\u1E49': 'n',
    '\u019E': 'n',
    '\u0272': 'n',
    '\u0149': 'n',
    '\uA791': 'n',
    '\uA7A5': 'n',
    '\u01CC': 'nj',
    '\u24DE': 'o',
    '\uFF4F': 'o',
    '\u00F2': 'o',
    '\u00F3': 'o',
    '\u00F4': 'o',
    '\u1ED3': 'o',
    '\u1ED1': 'o',
    '\u1ED7': 'o',
    '\u1ED5': 'o',
    '\u00F5': 'o',
    '\u1E4D': 'o',
    '\u022D': 'o',
    '\u1E4F': 'o',
    '\u014D': 'o',
    '\u1E51': 'o',
    '\u1E53': 'o',
    '\u014F': 'o',
    '\u022F': 'o',
    '\u0231': 'o',
    '\u00F6': 'o',
    '\u022B': 'o',
    '\u1ECF': 'o',
    '\u0151': 'o',
    '\u01D2': 'o',
    '\u020D': 'o',
    '\u020F': 'o',
    '\u01A1': 'o',
    '\u1EDD': 'o',
    '\u1EDB': 'o',
    '\u1EE1': 'o',
    '\u1EDF': 'o',
    '\u1EE3': 'o',
    '\u1ECD': 'o',
    '\u1ED9': 'o',
    '\u01EB': 'o',
    '\u01ED': 'o',
    '\u00F8': 'o',
    '\u01FF': 'o',
    '\u0254': 'o',
    '\uA74B': 'o',
    '\uA74D': 'o',
    '\u0275': 'o',
    '\u01A3': 'oi',
    '\u0223': 'ou',
    '\uA74F': 'oo',
    '\u24DF': 'p',
    '\uFF50': 'p',
    '\u1E55': 'p',
    '\u1E57': 'p',
    '\u01A5': 'p',
    '\u1D7D': 'p',
    '\uA751': 'p',
    '\uA753': 'p',
    '\uA755': 'p',
    '\u24E0': 'q',
    '\uFF51': 'q',
    '\u024B': 'q',
    '\uA757': 'q',
    '\uA759': 'q',
    '\u24E1': 'r',
    '\uFF52': 'r',
    '\u0155': 'r',
    '\u1E59': 'r',
    '\u0159': 'r',
    '\u0211': 'r',
    '\u0213': 'r',
    '\u1E5B': 'r',
    '\u1E5D': 'r',
    '\u0157': 'r',
    '\u1E5F': 'r',
    '\u024D': 'r',
    '\u027D': 'r',
    '\uA75B': 'r',
    '\uA7A7': 'r',
    '\uA783': 'r',
    '\u24E2': 's',
    '\uFF53': 's',
    '\u00DF': 's',
    '\u015B': 's',
    '\u1E65': 's',
    '\u015D': 's',
    '\u1E61': 's',
    '\u0161': 's',
    '\u1E67': 's',
    '\u1E63': 's',
    '\u1E69': 's',
    '\u0219': 's',
    '\u015F': 's',
    '\u023F': 's',
    '\uA7A9': 's',
    '\uA785': 's',
    '\u1E9B': 's',
    '\u24E3': 't',
    '\uFF54': 't',
    '\u1E6B': 't',
    '\u1E97': 't',
    '\u0165': 't',
    '\u1E6D': 't',
    '\u021B': 't',
    '\u0163': 't',
    '\u1E71': 't',
    '\u1E6F': 't',
    '\u0167': 't',
    '\u01AD': 't',
    '\u0288': 't',
    '\u2C66': 't',
    '\uA787': 't',
    '\uA729': 'tz',
    '\u24E4': 'u',
    '\uFF55': 'u',
    '\u00F9': 'u',
    '\u00FA': 'u',
    '\u00FB': 'u',
    '\u0169': 'u',
    '\u1E79': 'u',
    '\u016B': 'u',
    '\u1E7B': 'u',
    '\u016D': 'u',
    '\u00FC': 'u',
    '\u01DC': 'u',
    '\u01D8': 'u',
    '\u01D6': 'u',
    '\u01DA': 'u',
    '\u1EE7': 'u',
    '\u016F': 'u',
    '\u0171': 'u',
    '\u01D4': 'u',
    '\u0215': 'u',
    '\u0217': 'u',
    '\u01B0': 'u',
    '\u1EEB': 'u',
    '\u1EE9': 'u',
    '\u1EEF': 'u',
    '\u1EED': 'u',
    '\u1EF1': 'u',
    '\u1EE5': 'u',
    '\u1E73': 'u',
    '\u0173': 'u',
    '\u1E77': 'u',
    '\u1E75': 'u',
    '\u0289': 'u',
    '\u24E5': 'v',
    '\uFF56': 'v',
    '\u1E7D': 'v',
    '\u1E7F': 'v',
    '\u028B': 'v',
    '\uA75F': 'v',
    '\u028C': 'v',
    '\uA761': 'vy',
    '\u24E6': 'w',
    '\uFF57': 'w',
    '\u1E81': 'w',
    '\u1E83': 'w',
    '\u0175': 'w',
    '\u1E87': 'w',
    '\u1E85': 'w',
    '\u1E98': 'w',
    '\u1E89': 'w',
    '\u2C73': 'w',
    '\u24E7': 'x',
    '\uFF58': 'x',
    '\u1E8B': 'x',
    '\u1E8D': 'x',
    '\u24E8': 'y',
    '\uFF59': 'y',
    '\u1EF3': 'y',
    '\u00FD': 'y',
    '\u0177': 'y',
    '\u1EF9': 'y',
    '\u0233': 'y',
    '\u1E8F': 'y',
    '\u00FF': 'y',
    '\u1EF7': 'y',
    '\u1E99': 'y',
    '\u1EF5': 'y',
    '\u01B4': 'y',
    '\u024F': 'y',
    '\u1EFF': 'y',
    '\u24E9': 'z',
    '\uFF5A': 'z',
    '\u017A': 'z',
    '\u1E91': 'z',
    '\u017C': 'z',
    '\u017E': 'z',
    '\u1E93': 'z',
    '\u1E95': 'z',
    '\u01B6': 'z',
    '\u0225': 'z',
    '\u0240': 'z',
    '\u2C6C': 'z',
    '\uA763': 'z',
    '\u0386': '\u0391',
    '\u0388': '\u0395',
    '\u0389': '\u0397',
    '\u038A': '\u0399',
    '\u03AA': '\u0399',
    '\u038C': '\u039F',
    '\u038E': '\u03A5',
    '\u03AB': '\u03A5',
    '\u038F': '\u03A9',
    '\u03AC': '\u03B1',
    '\u03AD': '\u03B5',
    '\u03AE': '\u03B7',
    '\u03AF': '\u03B9',
    '\u03CA': '\u03B9',
    '\u0390': '\u03B9',
    '\u03CC': '\u03BF',
    '\u03CD': '\u03C5',
    '\u03CB': '\u03C5',
    '\u03B0': '\u03C5',
    '\u03C9': '\u03C9',
    '\u03C2': '\u03C3'
};
function stripSpecialChars(text) {
    var match = function (a) {
        return diacritics[a] || a;
    };
    return text.replace(/[^\u0000-\u007E]/g, match);
}
function isDefined(value) {
    return value !== null && value !== undefined;
}
function isObject(value) {
    return isDefined(value) && typeof value === 'object';
}
function isPromise(value) {
    return value instanceof Promise;
}
function isFunction(value) {
    return value instanceof Function;
}
function newId() {
    return 'axxxxxxxxxxx'.replace(/[x]/g, function (_) {
        var val = Math.random() * 16 | 0;
        return val.toString(16);
    });
}
var ItemsList = /** @class */ (function () {
    function ItemsList(_ngSelect) {
        this._ngSelect = _ngSelect;
        this._items = [];
        this._filteredItems = [];
        this._markedIndex = -1;
        this._selected = [];
    }
    Object.defineProperty(ItemsList.prototype, "items", {
        get: function () {
            return this._items;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemsList.prototype, "filteredItems", {
        get: function () {
            return this._filteredItems;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemsList.prototype, "value", {
        get: function () {
            return this._selected;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemsList.prototype, "markedItem", {
        get: function () {
            return this._filteredItems[this._markedIndex];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemsList.prototype, "markedIndex", {
        get: function () {
            return this._markedIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemsList.prototype, "noItemsToSelect", {
        get: function () {
            return this._ngSelect.hideSelected && this._items.length === this._selected.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemsList.prototype, "maxItemsSelected", {
        get: function () {
            return this._ngSelect.multiple && this._ngSelect.maxSelectedItems <= this._selected.length;
        },
        enumerable: true,
        configurable: true
    });
    ItemsList.prototype.setItems = function (items) {
        var _this = this;
        this._items = items.map(function (item, index) { return _this.mapItem(item, index); });
        if (this._ngSelect.groupBy) {
            this._groups = this._groupBy(this._items, this._ngSelect.groupBy);
            this._items = this._flatten(this._groups);
        }
        else {
            this._groups = new Map();
            this._groups.set(undefined, this._items);
        }
        this._filteredItems = __spread(this._items);
    };
    ItemsList.prototype.select = function (item) {
        if (item.selected || this.maxItemsSelected) {
            return;
        }
        if (!this._ngSelect.multiple) {
            this.clearSelected();
        }
        this._selected.push(item);
        item.selected = true;
        if (this._ngSelect.hideSelected) {
            this._filteredItems = this._filteredItems.filter(function (x) { return x !== item; });
        }
    };
    ItemsList.prototype.findItem = function (value) {
        var _this = this;
        if (this._ngSelect.bindValue) {
            return this._items.find(function (item) { return !item.hasChildren && _this.resolveNested(item.value, _this._ngSelect.bindValue) === value; });
        }
        var option = this._items.find(function (x) { return x.value === value; });
        var findBy = this._ngSelect.compareWith ?
            function (item) { return _this._ngSelect.compareWith(item.value, value); } :
            function (item) { return !item.hasChildren && item.label && item.label === _this.resolveNested(value, _this._ngSelect.bindLabel); };
        return option || this._items.find(function (item) { return findBy(item); });
    };
    ItemsList.prototype.unselect = function (item) {
        this._selected = this._selected.filter(function (x) { return x !== item; });
        item.selected = false;
        if (this._ngSelect.hideSelected) {
            this._filteredItems.splice(item.index, 0, item);
            this._filteredItems = __spread(this._filteredItems.sort(function (a, b) { return (a.index - b.index); }));
        }
    };
    ItemsList.prototype.unselectLast = function () {
        if (this._selected.length === 0) {
            return;
        }
        this.unselect(this._lastSelectedItem);
    };
    ItemsList.prototype.addItem = function (item) {
        var option = this.mapItem(item, this._items.length);
        this._items.push(option);
        this._filteredItems.push(option);
        return option;
    };
    ItemsList.prototype.clearSelected = function () {
        this._selected.forEach(function (item) {
            item.selected = false;
            item.marked = false;
        });
        this._selected = [];
        if (this._ngSelect.hideSelected) {
            this.resetItems();
        }
    };
    ItemsList.prototype.filter = function (term) {
        var e_1, _a;
        if (!term) {
            this.resetItems();
            return;
        }
        this._filteredItems = [];
        term = this._ngSelect.searchFn ? term : stripSpecialChars(term).toLocaleLowerCase();
        var match = this._ngSelect.searchFn || this._defaultSearchFn;
        var _loop_1 = function (key) {
            var e_2, _a, _b;
            var matchedItems = [];
            try {
                for (var _c = __values(this_1._groups.get(key)), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var item = _d.value;
                    if (this_1._ngSelect.hideSelected && this_1._selected.indexOf(item) > -1) {
                        continue;
                    }
                    var searchItem = this_1._ngSelect.searchFn ? item.value : item;
                    if (match(term, searchItem)) {
                        matchedItems.push(item);
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_2) throw e_2.error; }
            }
            if (matchedItems.length > 0) {
                var _e = __read(matchedItems.slice(-1), 1), last_1 = _e[0];
                if (last_1.parent) {
                    var head = this_1._items.find(function (x) { return x === last_1.parent; });
                    this_1._filteredItems.push(head);
                }
                (_b = this_1._filteredItems).push.apply(_b, __spread(matchedItems));
            }
        };
        var this_1 = this;
        try {
            for (var _b = __values(Array.from(this._groups.keys())), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
                _loop_1(key);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    ItemsList.prototype.resetItems = function () {
        var _this = this;
        if (this._filteredItems.length === this._items.length) {
            return;
        }
        this._filteredItems = this._ngSelect.hideSelected ?
            this._items.filter(function (x) { return _this._selected.indexOf(x) === -1; }) :
            this._items;
    };
    ItemsList.prototype.unmarkItem = function () {
        this._markedIndex = -1;
    };
    ItemsList.prototype.markNextItem = function () {
        this._stepToItem(+1);
    };
    ItemsList.prototype.markPreviousItem = function () {
        this._stepToItem(-1);
    };
    ItemsList.prototype.markItem = function (item) {
        this._markedIndex = this._filteredItems.indexOf(item);
    };
    ItemsList.prototype.markSelectedOrDefault = function (markDefault) {
        if (this._filteredItems.length === 0) {
            return;
        }
        var indexOfLastSelected = this._ngSelect.hideSelected ? -1 : this._filteredItems.indexOf(this._lastSelectedItem);
        if (this._lastSelectedItem && indexOfLastSelected > -1) {
            this._markedIndex = indexOfLastSelected;
        }
        else {
            this._markedIndex = markDefault ? this.filteredItems.findIndex(function (x) { return !x.disabled; }) : -1;
        }
    };
    ItemsList.prototype.resolveNested = function (option, key) {
        if (!isObject(option)) {
            return option;
        }
        if (key.indexOf('.') === -1) {
            return option[key];
        }
        else {
            var keys = key.split('.');
            var value = option;
            for (var i = 0, len = keys.length; i < len; ++i) {
                if (value == null) {
                    return null;
                }
                value = value[keys[i]];
            }
            return value;
        }
    };
    ItemsList.prototype.mapItem = function (item, index) {
        var label = this.resolveNested(item, this._ngSelect.bindLabel);
        return {
            index: index,
            label: isDefined(label) ? label.toString() : '',
            value: item,
            disabled: item.disabled,
            htmlId: newId()
        };
    };
    ItemsList.prototype.mapSelectedItems = function () {
        var _this = this;
        this._selected.forEach(function (selected, i) {
            var value = _this._ngSelect.bindValue ? selected.value[_this._ngSelect.bindValue] : selected.value;
            var item = _this.findItem(value);
            if (item && selected !== item) {
                item.selected = true;
                _this._selected[i] = item;
            }
        });
        if (this._ngSelect.hideSelected) {
            this._filteredItems = this.filteredItems.filter(function (x) { return _this._selected.indexOf(x) === -1; });
        }
    };
    ItemsList.prototype._defaultSearchFn = function (search, opt) {
        var label = stripSpecialChars(opt.label).toLocaleLowerCase();
        return label.indexOf(search) > -1;
    };
    ItemsList.prototype._getNextItemIndex = function (steps) {
        if (steps > 0) {
            return (this._markedIndex === this._filteredItems.length - 1) ? 0 : (this._markedIndex + 1);
        }
        return (this._markedIndex <= 0) ? (this._filteredItems.length - 1) : (this._markedIndex - 1);
    };
    ItemsList.prototype._stepToItem = function (steps) {
        if (this._filteredItems.length === 0 || this._filteredItems.every(function (x) { return x.disabled; })) {
            return;
        }
        this._markedIndex = this._getNextItemIndex(steps);
        if (this.markedItem.disabled) {
            this._stepToItem(steps);
        }
    };
    Object.defineProperty(ItemsList.prototype, "_lastSelectedItem", {
        get: function () {
            return this._selected[this._selected.length - 1];
        },
        enumerable: true,
        configurable: true
    });
    ItemsList.prototype._groupBy = function (items, prop) {
        var _this = this;
        var isPropFn = prop instanceof Function;
        var groups = items.reduce(function (grouped, item) {
            var key = isPropFn ? ((prop)).apply(_this, [item.value]) : item.value[(prop)];
            var group = grouped.get(key);
            if (group) {
                group.push(item);
            }
            else {
                grouped.set(key, [item]);
            }
            return grouped;
        }, new Map());
        return groups;
    };
    ItemsList.prototype._flatten = function (groups) {
        var _this = this;
        var i = 0;
        return Array.from(groups.keys()).reduce(function (items, key) {
            var parent = {
                label: key,
                hasChildren: true,
                index: i,
                disabled: !_this._ngSelect.selectableGroup,
                htmlId: newId()
            };
            parent.value = {};
            parent.value[_this._ngSelect.groupBy] = key;
            items.push(parent);
            i++;
            var children = groups.get(key).map(function (x) {
                x.parent = parent;
                x.hasChildren = false;
                i++;
                return x;
            });
            items.push.apply(items, __spread(children));
            return items;
        }, []);
    };
    return ItemsList;
}());
var NgOptionComponent = /** @class */ (function () {
    function NgOptionComponent(elementRef) {
        this.elementRef = elementRef;
        this.stateChange$ = new Subject();
        this._disabled = false;
    }
    Object.defineProperty(NgOptionComponent.prototype, "disabled", {
        get: function () { return this._disabled; },
        set: function (value) { this._disabled = this._isDisabled(value); },
        enumerable: true,
        configurable: true
    });
    NgOptionComponent.prototype.ngOnChanges = function (changes) {
        if (changes["disabled"]) {
            this.stateChange$.next({
                value: this.value,
                disabled: this._disabled
            });
        }
    };
    NgOptionComponent.prototype._isDisabled = function (value) {
        return value != null && "" + value !== 'false';
    };
    return NgOptionComponent;
}());
NgOptionComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-option',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: "<ng-content></ng-content>"
            },] },
];
NgOptionComponent.ctorParameters = function () { return [
    { type: ElementRef }
]; };
NgOptionComponent.propDecorators = {
    value: [{ type: Input }],
    disabled: [{ type: Input }]
};
var WindowService = /** @class */ (function () {
    function WindowService() {
    }
    WindowService.prototype.requestAnimationFrame = function (fn) {
        return window.requestAnimationFrame(fn);
    };
    return WindowService;
}());
WindowService.decorators = [
    { type: Injectable },
];
var VirtualScrollService = /** @class */ (function () {
    function VirtualScrollService() {
    }
    VirtualScrollService.prototype.calculateItems = function (d, dropdownEl, bufferAmount) {
        var scrollHeight = d.childHeight * d.itemsLength;
        if (dropdownEl.scrollTop > scrollHeight) {
            dropdownEl.scrollTop = scrollHeight;
        }
        var scrollTop = Math.max(0, dropdownEl.scrollTop);
        var indexByScrollTop = scrollTop / scrollHeight * d.itemsLength;
        var end = Math.min(d.itemsLength, Math.ceil(indexByScrollTop) + (d.itemsPerCol + 1));
        var maxStartEnd = end;
        var maxStart = Math.max(0, maxStartEnd - d.itemsPerCol - 1);
        var start = Math.min(maxStart, Math.floor(indexByScrollTop));
        var topPadding = d.childHeight * Math.ceil(start) - (d.childHeight * Math.min(start, bufferAmount));
        topPadding = !isNaN(topPadding) ? topPadding : 0;
        start = !isNaN(start) ? start : -1;
        end = !isNaN(end) ? end : -1;
        start -= bufferAmount;
        start = Math.max(0, start);
        end += bufferAmount;
        end = Math.min(d.itemsLength, end);
        return {
            topPadding: topPadding,
            scrollHeight: scrollHeight,
            start: start,
            end: end
        };
    };
    VirtualScrollService.prototype.calculateDimensions = function (itemsLength, index, panelEl, contentEl) {
        var panelRect = panelEl.getBoundingClientRect();
        var itemRect = contentEl.children[index] ? contentEl.children[index].getBoundingClientRect() : {
            width: panelRect.width,
            height: panelRect.height,
            top: 0,
        };
        var itemsPerCol = Math.max(1, Math.floor(panelRect.height / itemRect.height));
        return {
            itemsLength: itemsLength,
            viewWidth: panelRect.width,
            viewHeight: panelRect.height,
            childWidth: itemRect.width,
            childHeight: itemRect.height,
            itemsPerCol: itemsPerCol,
        };
    };
    return VirtualScrollService;
}());
VirtualScrollService.decorators = [
    { type: Injectable },
];
var TOP_CSS_CLASS = 'top';
var BOTTOM_CSS_CLASS = 'bottom';
var NgDropdownPanelComponent = /** @class */ (function () {
    function NgDropdownPanelComponent(_ngSelect, _renderer, _elementRef, _zone, _virtualScrollService, _window) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._zone = _zone;
        this._virtualScrollService = _virtualScrollService;
        this._window = _window;
        this.items = [];
        this.position = 'auto';
        this.bufferAmount = 4;
        this.virtualScroll = false;
        this.update = new EventEmitter();
        this.scrollToEnd = new EventEmitter();
        this._startupLoop = true;
        this._isScrolledToMarked = false;
        this._scrollToEndFired = false;
        this._disposeScrollListener = function () { };
        this._disposeDocumentResizeListener = function () { };
        this._selectElementRef = _ngSelect.elementRef;
        this._itemsList = _ngSelect.itemsList;
    }
    NgDropdownPanelComponent.prototype.ngOnInit = function () {
        this._handleScroll();
    };
    NgDropdownPanelComponent.prototype.ngOnChanges = function (changes) {
        if (changes["items"]) {
            this._handleItemsChange(changes["items"]);
        }
    };
    NgDropdownPanelComponent.prototype.ngOnDestroy = function () {
        this._disposeDocumentResizeListener();
        this._disposeScrollListener();
        if (this.appendTo) {
            this._renderer.removeChild(this._elementRef.nativeElement.parentNode, this._elementRef.nativeElement);
        }
    };
    NgDropdownPanelComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this._whenContentReady().then(function () {
            _this._handleDropdownPosition();
        });
    };
    NgDropdownPanelComponent.prototype.refresh = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this._zone.runOutsideAngular(function () {
                _this._window.requestAnimationFrame(function () {
                    _this._updateItems().then(resolve);
                });
            });
        });
    };
    NgDropdownPanelComponent.prototype.scrollInto = function (item) {
        if (!item) {
            return;
        }
        var index = this.items.indexOf(item);
        if (index < 0 || index >= this.items.length) {
            return;
        }
        var d = this._calculateDimensions(this.virtualScroll ? 0 : index);
        var scrollEl = this.scrollElementRef.nativeElement;
        var buffer = Math.floor(d.viewHeight / d.childHeight) - 1;
        if (this.virtualScroll) {
            scrollEl.scrollTop = (index * d.childHeight) - (d.childHeight * Math.min(index, buffer));
        }
        else {
            var contentEl = this.contentElementRef.nativeElement;
            var childrenHeight = Array.from(contentEl.children).slice(0, index).reduce(function (c, n) { return c + n.clientHeight; }, 0);
            scrollEl.scrollTop = childrenHeight - (d.childHeight * Math.min(index, buffer));
        }
    };
    NgDropdownPanelComponent.prototype.scrollIntoTag = function () {
        var el = this.scrollElementRef.nativeElement;
        var d = this._calculateDimensions();
        el.scrollTop = d.childHeight * (d.itemsLength + 1);
    };
    NgDropdownPanelComponent.prototype._handleScroll = function () {
        var _this = this;
        this._disposeScrollListener = this._renderer.listen(this.scrollElementRef.nativeElement, 'scroll', function () {
            _this.refresh();
            _this._fireScrollToEnd();
        });
    };
    NgDropdownPanelComponent.prototype._handleItemsChange = function (items) {
        var _this = this;
        this._scrollToEndFired = false;
        this._previousStart = undefined;
        this._previousEnd = undefined;
        if (items !== undefined && items.previousValue === undefined ||
            (items.previousValue !== undefined && items.previousValue.length === 0)) {
            this._startupLoop = true;
        }
        this.items = items.currentValue || [];
        this.refresh().then(function () {
            if (_this.appendTo && _this._currentPosition === 'top') {
                _this._updateAppendedDropdownPosition();
            }
        });
    };
    NgDropdownPanelComponent.prototype._updateItems = function () {
        var _this = this;
        NgZone.assertNotInAngularZone();
        if (!this.virtualScroll) {
            this._zone.run(function () {
                _this.update.emit(_this.items.slice());
                _this._scrollToMarked();
            });
            return Promise.resolve();
        }
        var loop = function (resolve) {
            var d = _this._calculateDimensions();
            var res = _this._virtualScrollService.calculateItems(d, _this.scrollElementRef.nativeElement, _this.bufferAmount || 0);
            ((_this.paddingElementRef.nativeElement)).style.height = res.scrollHeight + "px";
            var transform = 'translateY(' + res.topPadding + 'px)';
            ((_this.contentElementRef.nativeElement)).style.transform = transform;
            if (res.start !== _this._previousStart || res.end !== _this._previousEnd) {
                _this._zone.run(function () {
                    _this.update.emit(_this.items.slice(res.start, res.end));
                });
                _this._previousStart = res.start;
                _this._previousEnd = res.end;
                if (_this._startupLoop === true) {
                    loop(resolve);
                }
            }
            else if (_this._startupLoop === true) {
                _this._startupLoop = false;
                _this._scrollToMarked();
                resolve();
            }
        };
        return new Promise(function (resolve) { return loop(resolve); });
    };
    NgDropdownPanelComponent.prototype._fireScrollToEnd = function () {
        if (this._scrollToEndFired) {
            return;
        }
        var scroll = this.scrollElementRef.nativeElement;
        var panel = this._elementRef.nativeElement;
        var padding = this.virtualScroll ?
            this.paddingElementRef.nativeElement :
            this.contentElementRef.nativeElement;
        if (scroll.scrollTop + panel.clientHeight >= padding.clientHeight) {
            this.scrollToEnd.emit();
            this._scrollToEndFired = true;
        }
    };
    NgDropdownPanelComponent.prototype._calculateDimensions = function (index) {
        if (index === void 0) { index = 0; }
        return this._virtualScrollService.calculateDimensions(this.items.length, index, this.scrollElementRef.nativeElement, this.contentElementRef.nativeElement);
    };
    NgDropdownPanelComponent.prototype._handleDocumentResize = function () {
        var _this = this;
        if (!this.appendTo) {
            return;
        }
        this._disposeDocumentResizeListener = this._renderer.listen('window', 'resize', function () {
            _this._updateAppendedDropdownPosition();
        });
    };
    NgDropdownPanelComponent.prototype._scrollToMarked = function () {
        if (this._isScrolledToMarked) {
            return;
        }
        this._isScrolledToMarked = true;
        this.scrollInto(this._itemsList.markedItem);
    };
    NgDropdownPanelComponent.prototype._handleDropdownPosition = function () {
        if (this.appendTo) {
            this._appendDropdown();
            this._handleDocumentResize();
        }
        var dropdownEl = this._elementRef.nativeElement;
        this._currentPosition = this._calculateCurrentPosition(dropdownEl);
        var selectEl = this._selectElementRef.nativeElement;
        if (this._currentPosition === 'top') {
            this._renderer.addClass(dropdownEl, TOP_CSS_CLASS);
            this._renderer.removeClass(dropdownEl, BOTTOM_CSS_CLASS);
            this._renderer.addClass(selectEl, TOP_CSS_CLASS);
            this._renderer.removeClass(selectEl, BOTTOM_CSS_CLASS);
        }
        else {
            this._renderer.addClass(dropdownEl, BOTTOM_CSS_CLASS);
            this._renderer.removeClass(dropdownEl, TOP_CSS_CLASS);
            this._renderer.addClass(selectEl, BOTTOM_CSS_CLASS);
            this._renderer.removeClass(selectEl, TOP_CSS_CLASS);
        }
        if (this.appendTo) {
            this._updateAppendedDropdownPosition();
        }
        dropdownEl.style.opacity = '1';
    };
    NgDropdownPanelComponent.prototype._calculateCurrentPosition = function (dropdownEl) {
        if (this.position !== 'auto') {
            return this.position;
        }
        var selectRect = this._selectElementRef.nativeElement.getBoundingClientRect();
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var offsetTop = selectRect.top + window.pageYOffset;
        var height = selectRect.height;
        var dropdownHeight = dropdownEl.getBoundingClientRect().height;
        if (offsetTop + height + dropdownHeight > scrollTop + document.documentElement.clientHeight) {
            return 'top';
        }
        else {
            return 'bottom';
        }
    };
    NgDropdownPanelComponent.prototype._appendDropdown = function () {
        var parent = document.querySelector(this.appendTo);
        if (!parent) {
            throw new Error("appendTo selector " + this.appendTo + " did not found any parent element");
        }
        parent.appendChild(this._elementRef.nativeElement);
    };
    NgDropdownPanelComponent.prototype._updateAppendedDropdownPosition = function () {
        var parent = document.querySelector(this.appendTo) || document.body;
        var selectRect = this._selectElementRef.nativeElement.getBoundingClientRect();
        var dropdownPanel = this._elementRef.nativeElement;
        var boundingRect = parent.getBoundingClientRect();
        var offsetTop = selectRect.top - boundingRect.top;
        var offsetLeft = selectRect.left - boundingRect.left;
        var topDelta = this._currentPosition === 'bottom' ? selectRect.height : -dropdownPanel.clientHeight;
        dropdownPanel.style.top = offsetTop + topDelta + 'px';
        dropdownPanel.style.bottom = 'auto';
        dropdownPanel.style.left = offsetLeft + 'px';
        dropdownPanel.style.width = selectRect.width + 'px';
    };
    NgDropdownPanelComponent.prototype._whenContentReady = function () {
        var _this = this;
        if (this.items.length === 0) {
            return Promise.resolve();
        }
        var dropdownEl = this._elementRef.nativeElement;
        var ready = function (resolve) {
            var ngOption = dropdownEl.querySelector('.ng-option');
            if (ngOption) {
                resolve();
                return;
            }
            _this._zone.runOutsideAngular(function () {
                setTimeout(function () { return ready(resolve); }, 5);
            });
        };
        return new Promise(function (resolve) { return ready(resolve); });
    };
    return NgDropdownPanelComponent;
}());
NgDropdownPanelComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'ng-dropdown-panel',
                template: "\n        <div *ngIf=\"headerTemplate\" class=\"ng-dropdown-header\" ngProjectAs=\"header\" header>\n            <ng-container [ngTemplateOutlet]=\"headerTemplate\"></ng-container>\n        </div>\n        <div #scroll class=\"ng-dropdown-panel-items scroll-host\">\n            <div #padding [class.total-padding]=\"virtualScroll\"></div>\n            <div #content [class.scrollable-content]=\"virtualScroll && items.length > 0\">\n                <ng-content></ng-content>\n            </div>\n        </div>\n        <div *ngIf=\"footerTemplate\" class=\"ng-dropdown-footer\" ngProjectAs=\"footer\" footer>\n            <ng-container [ngTemplateOutlet]=\"footerTemplate\"></ng-container>\n        </div>\n    ",
                styles: [".ng-dropdown-panel{-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;opacity:0;width:100%;z-index:1050;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .ng-dropdown-panel-items{display:block;height:auto;-webkit-box-sizing:border-box;box-sizing:border-box;max-height:240px;overflow-y:auto}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{-webkit-box-sizing:border-box;box-sizing:border-box;cursor:pointer;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .highlighted{font-weight:700;text-decoration:underline}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.disabled{cursor:default}.ng-dropdown-panel .scroll-host{overflow:hidden;overflow-y:auto;position:relative;display:block;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .scrollable-content{top:0;left:0;width:100%;height:100%;position:absolute}.ng-dropdown-panel .total-padding{width:1px;opacity:0}"]
            },] },
];
NgDropdownPanelComponent.ctorParameters = function () { return [
    { type: NgSelectComponent, decorators: [{ type: Inject, args: [forwardRef(function () { return NgSelectComponent; }),] }] },
    { type: Renderer2 },
    { type: ElementRef },
    { type: NgZone },
    { type: VirtualScrollService },
    { type: WindowService }
]; };
NgDropdownPanelComponent.propDecorators = {
    items: [{ type: Input }],
    position: [{ type: Input }],
    appendTo: [{ type: Input }],
    bufferAmount: [{ type: Input }],
    virtualScroll: [{ type: Input }],
    headerTemplate: [{ type: Input }],
    footerTemplate: [{ type: Input }],
    update: [{ type: Output }],
    scrollToEnd: [{ type: Output }],
    contentElementRef: [{ type: ViewChild, args: ['content', { read: ElementRef },] }],
    scrollElementRef: [{ type: ViewChild, args: ['scroll', { read: ElementRef },] }],
    paddingElementRef: [{ type: ViewChild, args: ['padding', { read: ElementRef },] }]
};
var ConsoleService = /** @class */ (function () {
    function ConsoleService() {
    }
    ConsoleService.prototype.warn = function (message) {
        console.warn(message);
    };
    return ConsoleService;
}());
ConsoleService.decorators = [
    { type: Injectable },
];
var NG_SELECT_DEFAULT_CONFIG = new InjectionToken('ng-select-default-options');
var NgSelectComponent = /** @class */ (function () {
    function NgSelectComponent(config, _cd, _console, elementRef) {
        var _this = this;
        this._cd = _cd;
        this._console = _console;
        this.elementRef = elementRef;
        this.items = [];
        this.clearable = true;
        this.markFirst = true;
        this.dropdownPosition = 'auto';
        this.loading = false;
        this.closeOnSelect = true;
        this.hideSelected = false;
        this.selectOnTab = false;
        this.bufferAmount = 4;
        this.virtualScroll = false;
        this.selectableGroup = false;
        this.searchFn = null;
        this.multiple = false;
        this.addTag = false;
        this.searchable = true;
        this.blurEvent = new EventEmitter();
        this.focusEvent = new EventEmitter();
        this.changeEvent = new EventEmitter();
        this.openEvent = new EventEmitter();
        this.closeEvent = new EventEmitter();
        this.searchEvent = new EventEmitter();
        this.clearEvent = new EventEmitter();
        this.addEvent = new EventEmitter();
        this.removeEvent = new EventEmitter();
        this.scrollToEnd = new EventEmitter();
        this.isOpen = false;
        this.isFocused = false;
        this.isDisabled = false;
        this.itemsList = new ItemsList(this);
        this.viewPortItems = [];
        this.filterValue = null;
        this.dropdownId = newId();
        this.selectedItemId = 0;
        this._defaultLabel = 'label';
        this._defaultValue = 'value';
        this._typeaheadLoading = false;
        this._destroy$ = new Subject();
        this._onChange = function (_) { };
        this._onTouched = function () { };
        this.clearItem = function (item) {
            var option = _this.selectedItems.find(function (x) { return _this.objectEquals(x.value, item); });
            if (option && option.selected)
                _this.unselect(option);
        };
        this._mergeGlobalConfig(config);
    }
    Object.defineProperty(NgSelectComponent.prototype, "compareWith", {
        get: function () { return this._compareWith; },
        set: function (fn) {
            if (!isFunction(fn)) {
                throw Error('`compareWith` must be a function.');
            }
            this._compareWith = fn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgSelectComponent.prototype, "filtered", {
        get: function () { return !!this.filterValue; },
        enumerable: true,
        configurable: true
    });
    
    NgSelectComponent.prototype.objectEquals = function (v1, v2) {
        var _this = this;
        if (typeof (v1) !== typeof (v2)) {
            return false;
        }
        if (typeof (v1) === "function") {
            return v1.toString() === v2.toString();
        }
        if (v1 instanceof Object && v2 instanceof Object) {
            if (this.countProps(v1) !== this.countProps(v2)) {
                return false;
            }
            var r = true;
            var keys = Object.keys(v1);
            keys.forEach(function (key) {
                r = _this.objectEquals(v1[key], v2[key]);
                if (!r) {
                    return false;
                }
            });
            return r;
        }
        else {
            return v1 === v2;
        }
    };
    
    NgSelectComponent.prototype.countProps = function (obj) {
        var count = 0;
        var keys = Object.keys(obj);
        keys.forEach(function (key) {
            if (obj.hasOwnProperty(key)) {
                count++;
            }
        });
        return count;
    };
    
    Object.defineProperty(NgSelectComponent.prototype, "selectedItems", {
        get: function () {
            return this.itemsList.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgSelectComponent.prototype, "selectedValues", {
        get: function () {
            if (this.bindSelectedValues)
                return this.bindSelectedValues;
            else
                return this.selectedItems.map(function (x) { return x.value; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgSelectComponent.prototype, "isLoading", {
        get: function () {
            return this.loading || this._typeaheadLoading;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgSelectComponent.prototype, "hasValue", {
        get: function () {
            return this.selectedItems.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    NgSelectComponent.prototype.ngOnChanges = function (changes) {
        if (changes["multiple"]) {
            this.itemsList.clearSelected();
        }
        if (changes["items"]) {
            this._setItems(changes["items"].currentValue || []);
        }
    };
    NgSelectComponent.prototype.ngAfterViewInit = function () {
        if (this.ngOptions.length > 0 && this.items.length === 0) {
            this._setItemsFromNgOptions();
        }
    };
    NgSelectComponent.prototype.ngOnDestroy = function () {
        this._destroy$.next();
        this._destroy$.complete();
    };
    NgSelectComponent.prototype.handleKeyDown = function ($event) {
        if (KeyCode[$event.which]) {
            switch ($event.which) {
                case KeyCode.ArrowDown:
                    this._handleArrowDown($event);
                    break;
                case KeyCode.ArrowUp:
                    this._handleArrowUp($event);
                    break;
                case KeyCode.Space:
                    this._handleSpace($event);
                    break;
                case KeyCode.Enter:
                    this._handleEnter($event);
                    break;
                case KeyCode.Tab:
                    this._handleTab($event);
                    break;
                case KeyCode.Esc:
                    this.close();
                    break;
                case KeyCode.Backspace:
                    this._handleBackspace();
                    break;
            }
        }
    };
    NgSelectComponent.prototype.handleArrowClick = function ($event) {
        $event.stopPropagation();
        if (this.isOpen) {
            this.close();
        }
        else {
            this.open();
        }
    };
    NgSelectComponent.prototype.handleClearClick = function ($event) {
        $event.stopPropagation();
        if (this.hasValue) {
            this.clearModel();
        }
        this._clearSearch();
        this.focusSearchInput();
        if (this._isTypeahead) {
            this.typeahead.next(null);
        }
        this.clearEvent.emit();
    };
    NgSelectComponent.prototype.clearModel = function () {
        if (!this.clearable) {
            return;
        }
        this.itemsList.clearSelected();
        this._updateNgModel();
    };
    NgSelectComponent.prototype.writeValue = function (value) {
        this.itemsList.clearSelected();
        this._handleWriteValue(value);
        this._cd.markForCheck();
    };
    NgSelectComponent.prototype.registerOnChange = function (fn) {
        this._onChange = fn;
    };
    NgSelectComponent.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    NgSelectComponent.prototype.setDisabledState = function (isDisabled) {
        this.isDisabled = isDisabled;
        this._cd.markForCheck();
    };
    NgSelectComponent.prototype.toggle = function () {
        if (!this.isOpen) {
            this.open();
        }
        else {
            this.close();
        }
    };
    NgSelectComponent.prototype.open = function () {
        if (this.isDisabled || this.isOpen || this.itemsList.maxItemsSelected) {
            return;
        }
        if (!this._isTypeahead && (this.itemsList.noItemsToSelect)) {
            return;
        }
        this.isOpen = true;
        this.itemsList.markSelectedOrDefault(this.markFirst);
        this.openEvent.emit();
        if (!this.filterValue) {
            this.focusSearchInput();
        }
        this.detectChanges();
    };
    NgSelectComponent.prototype.close = function () {
        if (!this.isOpen) {
            return;
        }
        this.isOpen = false;
        this._clearSearch();
        this._onTouched();
        this.closeEvent.emit();
        this.detectChanges();
    };
    NgSelectComponent.prototype.toggleItem = function (item) {
        if (!item || item.disabled || this.isDisabled) {
            return;
        }
        if (this.multiple && item.selected) {
            this.unselect(item);
        }
        else {
            this.select(item);
        }
    };
    NgSelectComponent.prototype.select = function (item) {
        if (!item.selected) {
            this.itemsList.select(item);
            this._clearSearch();
            this._updateNgModel();
            this.addEvent.emit(item.value);
        }
        if (this.closeOnSelect || this.itemsList.noItemsToSelect) {
            this.close();
        }
    };
    NgSelectComponent.prototype.unselect = function (item) {
        this.itemsList.unselect(item);
        this._updateNgModel();
        this.removeEvent.emit(item);
    };
    NgSelectComponent.prototype.selectTag = function () {
        var _this = this;
        var _a;
        var tag;
        if (isFunction(this.addTag)) {
            tag = ((this.addTag))(this.filterValue);
        }
        else {
            tag = this._primitive ? this.filterValue : (_a = {}, _a[this.bindLabel] = this.filterValue, _a);
        }
        if (isPromise(tag)) {
            tag.then(function (item) { return _this.select(_this.itemsList.addItem(item)); })
                .catch(function () { });
        }
        else if (tag) {
            this.select(this.itemsList.addItem(tag));
        }
    };
    NgSelectComponent.prototype.showClear = function () {
        return this.clearable && (this.hasValue || this.filterValue) && !this.isDisabled;
    };
    NgSelectComponent.prototype.showAddTag = function () {
        var _this = this;
        return this.addTag &&
            this.filterValue &&
            !this.itemsList.filteredItems.some(function (x) { return x.label.toLowerCase() === _this.filterValue.toLowerCase(); }) &&
            !this.isLoading;
    };
    NgSelectComponent.prototype.showFilter = function () {
        return !this.isDisabled;
    };
    NgSelectComponent.prototype.showNoItemsFound = function () {
        var empty = this.itemsList.filteredItems.length === 0;
        return ((empty && !this._isTypeahead && !this.loading) ||
            (empty && this._isTypeahead && this.filterValue && !this.isLoading)) &&
            !this.showAddTag();
    };
    NgSelectComponent.prototype.showTypeToSearch = function () {
        var empty = this.itemsList.filteredItems.length === 0;
        return empty && this._isTypeahead && !this.filterValue && !this.isLoading;
    };
    NgSelectComponent.prototype.filter = function (term) {
        if (!this.searchable) {
            return;
        }
        this.filterValue = term;
        this.open();
        if (this._isTypeahead) {
            this._typeaheadLoading = true;
            this.typeahead.next(this.filterValue);
        }
        else {
            this.itemsList.filter(this.filterValue);
            this.itemsList.markSelectedOrDefault(this.markFirst);
        }
    };
    NgSelectComponent.prototype.onInputFocus = function () {
        this.isFocused = true;
        this.focusEvent.emit(null);
    };
    NgSelectComponent.prototype.onInputBlur = function () {
        this.isFocused = false;
        this.blurEvent.emit(null);
        if (!this.isOpen && !this.isDisabled) {
            this._onTouched();
        }
    };
    NgSelectComponent.prototype.onItemHover = function (item) {
        if (item.disabled) {
            return;
        }
        this.itemsList.markItem(item);
    };
    NgSelectComponent.prototype.detectChanges = function () {
        if (!((this._cd)).destroyed) {
            this._cd.detectChanges();
        }
    };
    NgSelectComponent.prototype.focusSearchInput = function () {
        this.filterInput.nativeElement.focus();
        this.filterInput.nativeElement.select();
    };
    NgSelectComponent.prototype._setItems = function (items) {
        var firstItem = items[0];
        this.bindLabel = this.bindLabel || this._defaultLabel;
        this._primitive = !isObject(firstItem);
        this.itemsList.setItems(items);
        if (items.length > 0 && this.hasValue) {
            this.itemsList.mapSelectedItems();
        }
        if (this._isTypeahead) {
            this._typeaheadLoading = false;
            this.itemsList.markSelectedOrDefault(this.markFirst);
        }
    };
    NgSelectComponent.prototype._setItemsFromNgOptions = function () {
        var _this = this;
        this.bindLabel = this.bindLabel || this._defaultLabel;
        this.bindValue = this.bindValue || this._defaultValue;
        var handleNgOptions = function (options) {
            _this.items = options.map(function (option) { return ({
                value: option.value,
                label: option.elementRef.nativeElement.innerHTML,
                disabled: option.disabled
            }); });
            _this.itemsList.setItems(_this.items);
            if (_this.hasValue) {
                _this.itemsList.mapSelectedItems();
            }
            _this.detectChanges();
        };
        var handleOptionChange = function () {
            var changedOrDestroyed = merge(_this.ngOptions.changes, _this._destroy$);
            merge.apply(void 0, __spread(_this.ngOptions.map(function (option) { return option.stateChange$; }))).pipe(takeUntil(changedOrDestroyed))
                .subscribe(function (option) {
                var item = _this.itemsList.findItem(option.value);
                item.disabled = option.disabled;
                _this._cd.markForCheck();
            });
        };
        this.ngOptions.changes
            .pipe(startWith(this.ngOptions), takeUntil(this._destroy$))
            .subscribe(function (options) {
            handleNgOptions(options);
            handleOptionChange();
        });
    };
    NgSelectComponent.prototype._isValidWriteValue = function (value) {
        var _this = this;
        if (!isDefined(value) ||
            (this.multiple && value === '') ||
            Array.isArray(value) && value.length === 0) {
            return false;
        }
        var validateBinding = function (item) {
            if (isObject(item) && _this.bindValue) {
                _this._console.warn("Binding object(" + JSON.stringify(item) + ") with bindValue is not allowed.");
                return false;
            }
            return true;
        };
        if (this.multiple) {
            if (!Array.isArray(value)) {
                this._console.warn('Multiple select ngModel should be array.');
                return false;
            }
            return value.every(function (item) { return validateBinding(item); });
        }
        else {
            return validateBinding(value);
        }
    };
    NgSelectComponent.prototype._handleWriteValue = function (ngModel) {
        var _this = this;
        if (!this._isValidWriteValue(ngModel)) {
            return;
        }
        var select = function (val) {
            var _a;
            var item = _this.itemsList.findItem(val);
            if (item) {
                _this.itemsList.select(item);
            }
            else {
                var isValObject = isObject(val);
                var isPrimitive = !isValObject && !_this.bindValue;
                if ((isValObject || isPrimitive)) {
                    _this.itemsList.select(_this.itemsList.mapItem(val, null));
                }
                else if (_this.bindValue) {
                    item = (_a = {}, _a[_this.bindLabel] = null, _a[_this.bindValue] = val, _a);
                    _this.itemsList.select(_this.itemsList.mapItem(item, null));
                }
            }
        };
        if (this.multiple) {
            ((ngModel)).forEach(function (item) {
                select(item);
            });
        }
        else {
            select(ngModel);
        }
    };
    NgSelectComponent.prototype._updateNgModel = function () {
        var e_3, _a;
        var model = [];
        try {
            for (var _b = __values(this.selectedItems), _c = _b.next(); !_c.done; _c = _b.next()) {
                var item = _c.value;
                if (this.bindValue) {
                    var resolvedValue = null;
                    if (item.hasChildren) {
                        resolvedValue = item.value[this.groupBy];
                    }
                    else {
                        resolvedValue = this.itemsList.resolveNested(item.value, this.bindValue);
                    }
                    model.push(resolvedValue);
                }
                else {
                    model.push(item.value);
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        if (this.multiple) {
            this._onChange(model);
            this.changeEvent.emit(this.selectedItems.map(function (x) { return x.value; }));
        }
        else {
            this._onChange(isDefined(model[0]) ? model[0] : null);
            this.changeEvent.emit(this.selectedItems[0] && this.selectedItems[0].value);
        }
        this._cd.markForCheck();
    };
    NgSelectComponent.prototype._clearSearch = function () {
        if (!this.filterValue) {
            return;
        }
        this.filterValue = null;
        this.itemsList.resetItems();
    };
    NgSelectComponent.prototype._scrollToMarked = function () {
        if (!this.isOpen || !this.dropdownPanel) {
            return;
        }
        this.dropdownPanel.scrollInto(this.itemsList.markedItem);
    };
    NgSelectComponent.prototype._scrollToTag = function () {
        if (!this.isOpen || !this.dropdownPanel) {
            return;
        }
        this.dropdownPanel.scrollIntoTag();
    };
    NgSelectComponent.prototype._handleTab = function ($event) {
        if (!this.isOpen) {
            return;
        }
        if (this.selectOnTab) {
            if (this.itemsList.markedItem) {
                this.toggleItem(this.itemsList.markedItem);
                $event.preventDefault();
            }
            else if (this.showAddTag()) {
                this.selectTag();
                $event.preventDefault();
            }
            else {
                this.close();
            }
        }
        else {
            this.close();
        }
    };
    NgSelectComponent.prototype._handleEnter = function ($event) {
        if (this.isOpen) {
            if (this.itemsList.markedItem) {
                this.toggleItem(this.itemsList.markedItem);
            }
            else if (this.addTag) {
                this.selectTag();
            }
        }
        $event.preventDefault();
        $event.stopPropagation();
    };
    NgSelectComponent.prototype._handleSpace = function ($event) {
        if (this.isOpen) {
            return;
        }
        this.open();
        $event.preventDefault();
    };
    NgSelectComponent.prototype._handleArrowDown = function ($event) {
        if (this.nextItemIsTag(+1)) {
            this.itemsList.unmarkItem();
            this._scrollToTag();
        }
        else {
            this.itemsList.markNextItem();
            this._scrollToMarked();
        }
        this.open();
        $event.preventDefault();
    };
    NgSelectComponent.prototype._handleArrowUp = function ($event) {
        if (!this.isOpen) {
            return;
        }
        if (this.nextItemIsTag(-1)) {
            this.itemsList.unmarkItem();
            this._scrollToTag();
        }
        else {
            this.itemsList.markPreviousItem();
            this._scrollToMarked();
        }
        $event.preventDefault();
    };
    NgSelectComponent.prototype.nextItemIsTag = function (nextStep) {
        var nextIndex = this.itemsList.markedIndex + nextStep;
        return this.addTag && this.filterValue
            && this.itemsList.markedItem
            && (nextIndex < 0 || nextIndex === this.itemsList.filteredItems.length);
    };
    NgSelectComponent.prototype._handleBackspace = function () {
        if (this.filterValue || !this.clearable || !this.hasValue) {
            return;
        }
        if (this.multiple) {
            this.itemsList.unselectLast();
            this._updateNgModel();
        }
        else {
            this.clearModel();
        }
    };
    Object.defineProperty(NgSelectComponent.prototype, "_isTypeahead", {
        get: function () {
            return this.typeahead && this.typeahead.observers.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    NgSelectComponent.prototype._mergeGlobalConfig = function (config) {
        this.notFoundText = this.notFoundText || config.notFoundText;
        this.typeToSearchText = this.typeToSearchText || config.typeToSearchText;
        this.addTagText = this.addTagText || config.addTagText;
        this.loadingText = this.loadingText || config.loadingText;
        this.clearAllText = this.clearAllText || config.clearAllText;
    };
    return NgSelectComponent;
}());
NgSelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-select',
                template: "<div (mousedown)=\"searchable ? open() : toggle()\" [class.ng-has-value]=\"hasValue\" class=\"ng-control\">\n    <div class=\"ng-value-container\">\n        <div class=\"ng-placeholder\">{{placeholder}}</div>\n\n        <ng-container *ngIf=\"!multiLabelTemplate && selectedItems.length > 0\">\n            <div [class.disabled]=\"item.disabled\" class=\"ng-value\" *ngFor=\"let item of selectedItems\">\n                <ng-template #defaultLabelTemplate>\n                    <span class=\"ng-value-icon left\" (click)=\"unselect(item); $event.stopPropagation()\" aria-hidden=\"true\">\u00D7</span>\n                    <span class=\"ng-value-label\">{{item.label}}</span>\n                </ng-template>\n    \n                <ng-template\n                    [ngTemplateOutlet]=\"labelTemplate || defaultLabelTemplate\"\n                    [ngTemplateOutletContext]=\"{ item: item.value, clear: clearItem, label: item.label }\">\n                </ng-template>\n            </div>\n        </ng-container>\n\n        <ng-template *ngIf=\"multiLabelTemplate && selectedValues.length > 0\"\n                [ngTemplateOutlet]=\"multiLabelTemplate\"\n                [ngTemplateOutletContext]=\"{ items: selectedValues, clear: clearItem }\">\n        </ng-template>\n\n        <div *ngIf=\"showFilter()\" class=\"ng-input\">\n            <input #filterInput\n                   type=\"text\"\n                   autocomplete=\"off\"\n                   [readOnly]=\"!searchable\"\n                   [value]=\"filterValue\"\n                   (input)=\"filter(filterInput.value)\"\n                   (focus)=\"onInputFocus()\"\n                   (blur)=\"onInputBlur()\"\n                   (change)=\"$event.stopPropagation()\"\n                   role=\"combobox\"\n                   [attr.aria-expanded]=\"isOpen\"\n                   [attr.aria-owns]=\"isOpen ? dropdownId : null\"\n                   [attr.aria-activedescendant]=\"isOpen ? itemsList?.markedItem?.htmlId : null\">\n        </div>\n    </div>\n\n    <div class=\"ng-spinner-loader\" *ngIf=\"isLoading\"></div>\n\n    <span *ngIf=\"showClear()\" (click)=\"handleClearClick($event)\" class=\"ng-clear-zone\" title=\"{{clearAllText}}\">\n        <span class=\"ng-clear\" aria-hidden=\"true\">\u00D7</span>\n    </span>\n\n    <span (mousedown)=\"handleArrowClick($event)\" class=\"ng-arrow-zone\">\n        <span class=\"ng-arrow\"></span>\n    </span>\n</div>\n\n<div class=\"ng-overlay-container\" *ngIf=\"isOpen\">\n    <div class=\"ng-overlay\" (click)=\"close()\" ></div>\n</div>\n\n<ng-dropdown-panel *ngIf=\"isOpen\"\n    class=\"ng-dropdown-panel\"\n    [virtualScroll]=\"virtualScroll\"\n    [bufferAmount]=\"bufferAmount\"\n    [appendTo]=\"appendTo\"\n    [position]=\"dropdownPosition\"\n    [headerTemplate]=\"headerTemplate\"\n    [footerTemplate]=\"footerTemplate\"\n    [items]=\"itemsList.filteredItems\"\n    (update)=\"viewPortItems = $event\"\n    (scrollToEnd)=\"scrollToEnd.emit($event)\"\n    [ngClass]=\"{'multiple': multiple}\"\n    [id]=\"dropdownId\">\n    \n    <ng-container>\n        <div class=\"ng-option\" [attr.role]=\"item.hasChildren ? 'group' : 'option'\" (click)=\"toggleItem(item)\" (mousedown)=\"$event.preventDefault()\" (mouseover)=\"onItemHover(item)\"\n                *ngFor=\"let item of viewPortItems\"\n                [class.disabled]=\"item.disabled\"\n                [class.selected]=\"item.selected\"\n                [class.ng-optgroup]=\"item.hasChildren\"\n                [class.ng-option]=\"!item.hasChildren\"\n                [class.ng-option-child]=\"!!item.parent\"\n                [class.marked]=\"item === itemsList.markedItem\"\n                id=\"{{item?.htmlId || null}}\">\n\n            <ng-template #defaultOptionTemplate>\n                <span class=\"ng-option-label\">{{item.label}}</span>\n            </ng-template>\n\n            <ng-template\n                [ngTemplateOutlet]=\"item.hasChildren ? (optgroupTemplate || defaultOptionTemplate) : (optionTemplate || defaultOptionTemplate)\"\n                [ngTemplateOutletContext]=\"{ item: item.value, index: item.index, searchTerm: filterValue }\">\n            </ng-template>\n        </div>\n\n        <div class=\"ng-option\" [class.marked]=\"!itemsList.markedItem\" (mouseover)=\"itemsList.unmarkItem()\" role=\"option\" (click)=\"selectTag()\" *ngIf=\"showAddTag()\">\n            <span><span class=\"ng-tag-label\">{{addTagText}}</span>\"{{filterValue}}\"</span>\n        </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"showNoItemsFound()\">\n        <ng-template #defaultNotFoundTemplate>\n            <div class=\"ng-option disabled\">{{notFoundText}}</div>\n        </ng-template>\n    \n        <ng-template\n            [ngTemplateOutlet]=\"notFoundTemplate || defaultNotFoundTemplate\"\n            [ngTemplateOutletContext]=\"{ searchTerm: filterValue }\">\n        </ng-template>\n    </ng-container>\n\n    <ng-container *ngIf=\"showTypeToSearch()\">\n        <ng-template #defaultTypeToSearchTemplate>\n            <div class=\"ng-option disabled\">{{typeToSearchText}}</div>\n        </ng-template>\n    \n        <ng-template\n            [ngTemplateOutlet]=\"typeToSearchTemplate || defaultTypeToSearchTemplate\">\n        </ng-template>\n    </ng-container>\n   \n    <ng-container *ngIf=\"isLoading && itemsList.filteredItems.length === 0\">\n        <ng-template #defaultLoadingTextTemplate>\n            <div class=\"ng-option disabled\">{{loadingText}}</div>\n        </ng-template>\n    \n        <ng-template\n            [ngTemplateOutlet]=\"loadingTextTemplate || defaultLoadingTextTemplate\"\n            [ngTemplateOutletContext]=\"{ searchTerm: filterValue  }\">\n        </ng-template>\n    </ng-container>\n\n</ng-dropdown-panel>\n",
                styles: [".ng-select{position:relative;display:block;-webkit-box-sizing:border-box;box-sizing:border-box}.ng-select div,.ng-select input,.ng-select span{-webkit-box-sizing:border-box;box-sizing:border-box}.ng-select [hidden]{display:none}.ng-select.searchable .ng-control .ng-value-container .ng-input{opacity:1}.ng-select.opened .ng-control{z-index:1001}.ng-select.disabled .ng-control .ng-value-container .ng-placeholder,.ng-select.disabled .ng-control .ng-value-container .ng-value{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.ng-select.disabled .ng-arrow-zone{cursor:default}.ng-select.filtered .ng-placeholder{display:none}.ng-select .ng-control{color:#333;cursor:default;display:-webkit-box;display:-ms-flexbox;display:flex;outline:0;overflow:hidden;position:relative;width:100%}.ng-select .ng-control .ng-value-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1}.ng-select .ng-control .ng-value-container .ng-input{opacity:0}.ng-select .ng-control .ng-value-container .ng-input>input{-webkit-box-sizing:content-box;box-sizing:content-box;background:none;border:0;-webkit-box-shadow:none;box-shadow:none;outline:0;cursor:default;width:100%}.ng-select .ng-control .ng-value-container .ng-input>input::-ms-clear{display:none}.ng-select.ng-single.filtered .ng-control .ng-value-container .ng-value{visibility:hidden}.ng-select.ng-single .ng-control .ng-value-container,.ng-select.ng-single .ng-control .ng-value-container .ng-value{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-select.ng-single .ng-control .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-single .ng-control .ng-value-container .ng-input{position:absolute;left:0;width:100%}.ng-select.ng-multiple.disabled>.ng-control .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-multiple .ng-control .ng-value-container{-ms-flex-wrap:wrap;flex-wrap:wrap}.ng-select.ng-multiple .ng-control .ng-value-container .ng-value{white-space:nowrap}.ng-select.ng-multiple .ng-control .ng-value-container .ng-value.disabled .ng-value-icon{display:none}.ng-select.ng-multiple .ng-control .ng-value-container .ng-value .ng-value-icon{cursor:pointer}.ng-select.ng-multiple .ng-control .ng-value-container .ng-input{-webkit-box-flex:1;-ms-flex:1;flex:1;z-index:2}.ng-select.ng-multiple .ng-control .ng-value-container .ng-placeholder{position:absolute;z-index:1}.ng-select .ng-clear-zone{cursor:pointer;position:relative;width:17px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ng-select .ng-clear-zone .ng-clear{display:inline-block;font-size:18px;line-height:1}.ng-select .ng-spinner-loader{border-radius:50%;width:17px;height:17px;margin-right:5px;font-size:10px;position:relative;text-indent:-9999em;border-top:2px solid rgba(66,66,66,.2);border-right:2px solid rgba(66,66,66,.2);border-bottom:2px solid rgba(66,66,66,.2);border-left:2px solid #424242;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-animation:.8s linear infinite load8;animation:.8s linear infinite load8}.ng-select .ng-spinner-loader:after{border-radius:50%;width:17px;height:17px}@-webkit-keyframes load8{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes load8{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.ng-select .ng-arrow-zone{cursor:pointer;position:relative;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ng-select .ng-arrow-zone .ng-arrow{display:inline-block;height:0;width:0;position:relative}.ng-select .ng-overlay-container{pointer-events:none;top:0;left:0;height:100%;width:100%;position:fixed;z-index:1000}.ng-select .ng-overlay-container .ng-overlay{top:0;bottom:0;left:0;right:0;opacity:0;position:absolute;pointer-events:auto;z-index:1000}"],
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(function () { return NgSelectComponent; }),
                        multi: true
                    }],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    'role': 'listbox',
                    'class': 'ng-select',
                    '[class.ng-single]': '!multiple',
                }
            },] },
];
NgSelectComponent.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: Inject, args: [NG_SELECT_DEFAULT_CONFIG,] }] },
    { type: ChangeDetectorRef },
    { type: ConsoleService },
    { type: ElementRef }
]; };
NgSelectComponent.propDecorators = {
    items: [{ type: Input }],
    bindLabel: [{ type: Input }],
    bindValue: [{ type: Input }],
    clearable: [{ type: Input }],
    markFirst: [{ type: Input }],
    placeholder: [{ type: Input }],
    notFoundText: [{ type: Input }],
    typeToSearchText: [{ type: Input }],
    addTagText: [{ type: Input }],
    loadingText: [{ type: Input }],
    clearAllText: [{ type: Input }],
    dropdownPosition: [{ type: Input }],
    appendTo: [{ type: Input }],
    loading: [{ type: Input }],
    closeOnSelect: [{ type: Input }],
    hideSelected: [{ type: Input }],
    selectOnTab: [{ type: Input }],
    maxSelectedItems: [{ type: Input }],
    groupBy: [{ type: Input }],
    bufferAmount: [{ type: Input }],
    virtualScroll: [{ type: Input }],
    selectableGroup: [{ type: Input }],
    searchFn: [{ type: Input }],
    bindSelectedValues: [{ type: Input }],
    typeahead: [{ type: Input }, { type: HostBinding, args: ['class.typeahead',] }],
    multiple: [{ type: Input }, { type: HostBinding, args: ['class.ng-multiple',] }],
    addTag: [{ type: Input }, { type: HostBinding, args: ['class.taggable',] }],
    searchable: [{ type: Input }, { type: HostBinding, args: ['class.searchable',] }],
    compareWith: [{ type: Input }],
    blurEvent: [{ type: Output, args: ['blur',] }],
    focusEvent: [{ type: Output, args: ['focus',] }],
    changeEvent: [{ type: Output, args: ['change',] }],
    openEvent: [{ type: Output, args: ['open',] }],
    closeEvent: [{ type: Output, args: ['close',] }],
    searchEvent: [{ type: Output, args: ['search',] }],
    clearEvent: [{ type: Output, args: ['clear',] }],
    addEvent: [{ type: Output, args: ['add',] }],
    removeEvent: [{ type: Output, args: ['remove',] }],
    scrollToEnd: [{ type: Output, args: ['scrollToEnd',] }],
    optionTemplate: [{ type: ContentChild, args: [NgOptionTemplateDirective, { read: TemplateRef },] }],
    optgroupTemplate: [{ type: ContentChild, args: [NgOptgroupTemplateDirective, { read: TemplateRef },] }],
    labelTemplate: [{ type: ContentChild, args: [NgLabelTemplateDirective, { read: TemplateRef },] }],
    multiLabelTemplate: [{ type: ContentChild, args: [NgMultiLabelTemplateDirective, { read: TemplateRef },] }],
    headerTemplate: [{ type: ContentChild, args: [NgHeaderTemplateDirective, { read: TemplateRef },] }],
    footerTemplate: [{ type: ContentChild, args: [NgFooterTemplateDirective, { read: TemplateRef },] }],
    notFoundTemplate: [{ type: ContentChild, args: [NgNotFoundTemplateDirective, { read: TemplateRef },] }],
    typeToSearchTemplate: [{ type: ContentChild, args: [NgTypeToSearchTemplateDirective, { read: TemplateRef },] }],
    loadingTextTemplate: [{ type: ContentChild, args: [NgLoadingTextTemplateDirective, { read: TemplateRef },] }],
    dropdownPanel: [{ type: ViewChild, args: [forwardRef(function () { return NgDropdownPanelComponent; }),] }],
    ngOptions: [{ type: ContentChildren, args: [NgOptionComponent, { descendants: true },] }],
    filterInput: [{ type: ViewChild, args: ['filterInput',] }],
    isOpen: [{ type: HostBinding, args: ['class.opened',] }],
    isFocused: [{ type: HostBinding, args: ['class.focused',] }],
    isDisabled: [{ type: HostBinding, args: ['class.disabled',] }],
    filtered: [{ type: HostBinding, args: ['class.filtered',] }],
    handleKeyDown: [{ type: HostListener, args: ['keydown', ['$event'],] }]
};
var NgOptionHighlightDirective = /** @class */ (function () {
    function NgOptionHighlightDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.element = this.elementRef.nativeElement;
    }
    NgOptionHighlightDirective.prototype.ngOnChanges = function (changes) {
        if (isDefined(changes["term"].currentValue) && isDefined(this.label)) {
            this._highlightLabelWithSearchTerm();
        }
    };
    NgOptionHighlightDirective.prototype.ngAfterViewInit = function () {
        this.label = this.element.innerHTML;
    };
    NgOptionHighlightDirective.prototype._highlightLabelWithSearchTerm = function () {
        var label = this.label;
        if (!this.term) {
            this._setInnerHtml(label);
            return;
        }
        var indexOfTerm = stripSpecialChars(label)
            .toLowerCase()
            .indexOf(stripSpecialChars(this.term).toLowerCase());
        if (indexOfTerm > -1) {
            this._setInnerHtml(label.substring(0, indexOfTerm)
                + ("<span class=\"highlighted\">" + label.substr(indexOfTerm, this.term.length) + "</span>")
                + label.substring(indexOfTerm + this.term.length, label.length));
        }
        else {
            this._setInnerHtml(label);
        }
    };
    NgOptionHighlightDirective.prototype._setInnerHtml = function (html) {
        this.renderer.setProperty(this.elementRef.nativeElement, 'innerHTML', html);
    };
    return NgOptionHighlightDirective;
}());
NgOptionHighlightDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngOptionHighlight]'
            },] },
];
NgOptionHighlightDirective.ctorParameters = function () { return [
    { type: ElementRef },
    { type: Renderer2 }
]; };
NgOptionHighlightDirective.propDecorators = {
    term: [{ type: Input, args: ['ngOptionHighlight',] }]
};
var ɵ0 = {
    notFoundText: 'No items found',
    typeToSearchText: 'Type to search',
    addTagText: 'Add item',
    loadingText: 'Loading...',
    clearAllText: 'Clear all',
    disableVirtualScroll: false
};
var NgSelectModule = /** @class */ (function () {
    function NgSelectModule() {
    }
    return NgSelectModule;
}());
NgSelectModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    NgDropdownPanelComponent,
                    NgOptionComponent,
                    NgSelectComponent,
                    NgOptionHighlightDirective,
                    NgOptgroupTemplateDirective,
                    NgOptionTemplateDirective,
                    NgLabelTemplateDirective,
                    NgMultiLabelTemplateDirective,
                    NgHeaderTemplateDirective,
                    NgFooterTemplateDirective,
                    NgNotFoundTemplateDirective,
                    NgTypeToSearchTemplateDirective,
                    NgLoadingTextTemplateDirective
                ],
                imports: [
                    CommonModule
                ],
                exports: [
                    NgSelectComponent,
                    NgOptionComponent,
                    NgOptionHighlightDirective,
                    NgOptgroupTemplateDirective,
                    NgOptionTemplateDirective,
                    NgLabelTemplateDirective,
                    NgMultiLabelTemplateDirective,
                    NgHeaderTemplateDirective,
                    NgFooterTemplateDirective,
                    NgNotFoundTemplateDirective,
                    NgTypeToSearchTemplateDirective,
                    NgLoadingTextTemplateDirective
                ],
                providers: [
                    ConsoleService,
                    WindowService,
                    VirtualScrollService,
                    {
                        provide: NG_SELECT_DEFAULT_CONFIG,
                        useValue: ɵ0
                    }
                ]
            },] },
];

export { NgSelectComponent, NG_SELECT_DEFAULT_CONFIG, NgSelectModule, ConsoleService as ɵn, NgDropdownPanelComponent as ɵj, NgOptionHighlightDirective as ɵo, NgOptionComponent as ɵm, NgFooterTemplateDirective as ɵf, NgHeaderTemplateDirective as ɵe, NgLabelTemplateDirective as ɵc, NgLoadingTextTemplateDirective as ɵi, NgMultiLabelTemplateDirective as ɵd, NgNotFoundTemplateDirective as ɵg, NgOptgroupTemplateDirective as ɵb, NgOptionTemplateDirective as ɵa, NgTypeToSearchTemplateDirective as ɵh, VirtualScrollService as ɵk, WindowService as ɵl };
//# sourceMappingURL=ng-select.js.map
