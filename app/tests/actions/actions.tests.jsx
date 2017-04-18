//.......... Lec. 134
	import configureMockStore from 'redux-mock-store';
	import thunk from 'redux-thunk';

//.......... Lec. 117
var expect = require('expect');

//...... Lec. ~136
import firebase, {firebaseRef} from 'app/firebase/';
var actions = require('actions');

//.......... Lec. 134
//recebe 1 parameter, um array 'midleware'
var createMockStore = configureMockStore([thunk]);

//.......... 
describe('Actions', ()=>
{
	//.......... 
	it('Should generate search text action', ()=>
	{
		var action = {
			type: 'SEARCH_TEXT',
			searchText: 'Some search text'	
		};

		var res = actions.searchText(action.searchText);

		expect(res).toEqual(action);
	});
	//..........ANTES DA LEC. 134
	/* 
	it('Should generate add todo action', ()=>
	{
		var action = {
			type: 'ADD_TODO',
			text: 'Thing to do'	 		
		};

		var res = actions.addTodo(action.text);

		expect(res).toEqual(action);
	});
	*/
	//..........LEC. 134 COM FIREBASE
	it('Should generate add todo action', ()=>
	{
		var action = {
			type: 'ADD_TODO',
			todo: {		
					id: 'abc123', 			//uuid(),
					text: "SOMETHING TO DO", 	//action.text,
					completed: 	false,
					createdAt: '0' 	//moment().unix(),  	//Lec. 102
					//completedAt: undefined  	//Lec. 102
				}	 		
		};

		var res = actions.addTodo(action.todo);

		expect(res).toEqual(action);
	});
	//..........LEC. 134 COM FIREBASE
	//foi instalado um module para poder criar este teste, redux-mock-store,
	//porque o código a testar tem uma componente ASYNC;
	//...... Lec. 147 DESCATIVADA AQUI, PASSOU PARA BAIXO...
	/*it('Should create todo and dispatch ADD_TODO', (done)=>{
		const store = createMockStore({});
		const todoText = 'My todo item';

		store.dispatch(actions.startAddTodo(todoText)).then(()=>{
			const actions = store.getActions();
			expect(actions[0]).toInclude({
				type: 'ADD_TODO'
			});

			expect(actions[0].todo).toInclude({
				text: todoText
			});

			done();

		}).catch(done);

	});//...it('Should create todo and dispatc...
	*/
	//..........Lec. 126  
	it('Should generate add todos action object', ()=>
	{
		var todos = [{
			id:'111',
			text:'anything',
			completed: false,
			completedAt: 'undefined',
			createdAt: 330000
		}];

		var action = {
			type: 'ADD_TODOS',
			todos	
		};

		var res = actions.addTodos(todos);

		expect(res).toEqual(action);
	});
	//.......... 
	it('Should generate toggle show completed action', ()=>
	{
		var action = {
			type: 'TOGGLE_SHOW_COMPLETED'	
		};

		var res = actions.toggleShowCompleted();

		expect(res).toEqual(action);
	});
	//..........DESACTIVADA NA Lec. 136
	/*it('Should generate toggle  todo action', ()=>
	{
		var action = {
			type: 'TOGGLE_TODO',
			id: '123'	 		
		};

		var res = actions.toggleTodo(action.id);

		expect(res).toEqual(action);
	});*/
	//..........Lec. 136 
	it('Should generate UPDATE  todo action', ()=>
	{
		var action = {
			type: 'UPDATE_TODO',
			id: '123',
			updates: {completed: false}	 		
		};

		var res = actions.updateTodo(action.id, action.updates);

		expect(res).toEqual(action);
	});
	//..........
	/*	it('should generate toggle todo action', () => {
		    var action = {
		      type: 'TOGGLE_TODO',
		      id: '123'
		    };
		    var res = actions.toggleTodo(action.id);

		    expect(res).toEqual(action);
		  });*/ 
	//..........
	//.......... Lec. 145
	it('Should generate login action object  LEC. 145', ()=>{
		const action = {
			type: 'LOGIN',
			uid: '123abc'
		}

		const res = actions.login(action.uid);

		expect(res).toEqual(action);
	});
	//.......... Lec. 145
	it('Should generate logout action object  LEC. 145', ()=>{
		const action = {
			type: 'LOGOUT'
		}
		const res = actions.logout();

		expect(res).toEqual(action);
	});	
	//..........Lec. 136, alterada na Lec. 138 e na Lec. 147 (Autenticação)
	describe('TESTS WITH FIREBASE TODOS', ()=>{
		var testTodoRef;
		var uid; 		//Lec. 147
		var todosRef; 	//Lec. 147
		//...... DESACTIVADA/ALTERADA NA Lec. 147
		/*beforeEach((done)=>{
			var todosRef = firebaseRef.child('todos');
			//CADA TESTE INICIA COM A DATABASE EMPTY;
			todosRef.remove().then(()=>{
				testTodoRef = firebaseRef.child('todos').push();
				
				return testTodoRef.set({
					text: 'Something to do',
					completed: false,
					createdAt: 23453453
				})
			})
			.then( () => done() )
			.catch(done);
		});
		*/
		beforeEach((done)=>{
			firebase.auth().signInAnonymously().then((user) => {
				uid = user.uid;
				todosRef = firebaseRef.child(`users/${uid}/todos`);

				return todosRef.remove();
			}).then(()=>{
				testTodoRef = todosRef.push();

				return testTodoRef.set({
					text: 'Something to do',
					completed: false,
					createdAt: 23453453
				})
			})
			.then( () => done() )
			.catch(done); 
		});

		//...... LEC. 147 ALTERADA
		/*
			afterEach((done)=>{
				testTodoRef.remove().then(()=> done());
			})
		*/
		afterEach((done)=>{
			todosRef.remove().then(()=> done());
		});

		//...... CODIGO COPIADO DO ORIGINAL, LEC. 138... Alt. na Lec. 147
		it('should toggle todo and dispatch UPDATE_TODO action', (done) => {
		      //const store = createMockStore({});
		      //...... Alt. na Lec. 147
		      const store = createMockStore({auth: {uid}});
		      const action = actions.startToggleTodo(testTodoRef.key, true);

		      store.dispatch(action).then(() => {
		        const mockActions = store.getActions();

		        expect(mockActions[0]).toInclude({
		          type: 'UPDATE_TODO',
		          id: testTodoRef.key
		        });
		        expect(mockActions[0].updates).toInclude({
		          completed: true
		        });
		        expect(mockActions[0].updates.completedAt).toExist();

		        done();
		      }, done);
		});

		//...... Lec. 138
		it('should populate todos and dispatch ADD_TODOS @@@@@@@@@@@@@@@@@@@@@@@@', (done) => {
			//const store = createMockStore({});
		    //...... Alt. na Lec. 147
		    const store = createMockStore({auth: {uid}});
			const action = actions.startAddTodos();

			store.dispatch(action).then(()=>{
				const mockActions = store.getActions();

				expect(mockActions[0].type).toEqual('ADD_TODOS');
				expect(mockActions[0].todos.length).toEqual(1);
				expect(mockActions[0].todos[0].text).toEqual('Something to do');

				done();

			}, done);
		});
		//...... 
		//...... Lec. 147 
		it('Should create todo and dispatch ADD_TODO', (done)=>{
			//const store = createMockStore({});
		    //...... Alt. na Lec. 147
		    const store = createMockStore({auth: {uid}});
			const todoText = 'My todo item';

			store.dispatch(actions.startAddTodo(todoText)).then(()=>{
				const actions = store.getActions();
				expect(actions[0]).toInclude({
					type: 'ADD_TODO'
				});

				expect(actions[0].todo).toInclude({
					text: todoText
				});

				done();

			}).catch(done);

		});//...it('Should create todo and dispatc...
	
		//...... 

	});	
	//.......... 
});//...describe