import {Injectable} from '@angular/core';
import {from, Observable} from 'rxjs';
import {User} from '../model/user';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import {map} from 'rxjs/operators';
 
@Injectable({
 providedIn: 'root'
})
export class UsuarioFirestoreService {
 
 colecaoUsers: AngularFirestoreCollection<User>;
 NOME_COLECAO = 'users';
 
 constructor(private afs: AngularFirestore) {
   this.colecaoUsers = afs.collection(this.NOME_COLECAO);
 }
 
 list(): Observable<User[]> {
   return this.colecaoUsers.valueChanges({idField: 'id'});
 }
 
 create(user: User): Observable<object> {  
   return from(this.colecaoUsers.add(Object.assign({}, user)));
 }
 
 delete(id: string): Observable<void> {
   return from(this.colecaoUsers.doc(id).delete());
 }
 
}
