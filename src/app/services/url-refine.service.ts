import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UrlRefineService {
    constructor() {
    }
    fetchUrlforpost(value) {
        switch (value) {
            case 'cuisine':
                return 'api/posts/cuisine'
            case 'view':
                return 'api/posts/view'
            case 'dress':
                return 'api/posts/dress'
            case 'hotel':
                return 'api/posts/hotels'
        }
    }
    fetchUrlforallView(value) {
        switch (value) {
            case 'cuisine':
                return 'api/posts/cuisines/1/999'
            case 'view':
                return 'api/posts/views/1/999'
            case 'dress':
                return 'api/posts/dresses/1/999'
            case 'hotel':
                return 'api/posts/hotels/1/999'
        }
    }
    fetchUrlforsinglepost(value) {
        switch (value) {
            case 'cuisine':
                return 'api/posts/cuisine'
            case 'view':
                return 'api/posts/view'
            case 'dress':
                return 'api/posts/dress'
            case 'hotel':
                return 'api/posts/hotel/'
        }
    }
    fetchUrlforDelete(value) {
        switch (value) {
            case 'cuisine':
                return 'api/posts/cuisine'
            case 'view':
                return 'api/posts/view'
            case 'dress':
                return 'api/posts/dress'
            case 'hotel':
                return 'api/posts/hotels'
        }
    }
}